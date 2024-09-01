import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { convertUnix, sunshineCalculator } from "../../services/timeConverter";
import roundTemperature from "../../services/roundTemperature";

export default function CityCard({ name }) {
  const [cityDataCurrent, setcityDataCurrent] = useState({});
  const [cityDataForecast, setcityDataForecast] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const currentRequest = fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&lang=fr&appid=${
      import.meta.env.VITE_APP_ID
    }`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch current data");
    }
    return response.json();
  });

  const forecastRequest = fetch(
    `https://api.openweathermap.org/data/2.5/forecast?q=${name}&units=metric&cnt=8&lang=fr&appid=${
      import.meta.env.VITE_APP_ID
    }`
  ).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch forecast data");
    }
    return response.json();
  });

  useEffect(() => {
    Promise.all([currentRequest, forecastRequest])
      .then(([cityDataCurrent, cityDataForecast]) => {
        setcityDataCurrent(cityDataCurrent);
        setcityDataForecast(cityDataForecast);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, [name]);

  return isLoading ? (
    <p>Chargement...</p>
  ) : (
    <details>
      <summary className="overflow-x-hidden">
        <h3>{cityDataCurrent.name}</h3>
        <img
          src={`https://openweathermap.org/img/wn/${cityDataCurrent.weather[0].icon}@2x.png`}
          alt={cityDataCurrent.weather[0].description}
        />
        <span className="d-sm-none">
          | {roundTemperature(cityDataCurrent.main.temp)} °C
        </span>
      </summary>
      <h4>Actuellement</h4>
      <ul>
        <li>
          Conditions météorologiques :{" "}
          <strong>{cityDataCurrent.weather[0].description}</strong>.
        </li>
        <li>
          Température :{" "}
          <strong>{roundTemperature(cityDataCurrent.main.temp)} °C</strong>,
          minimale : {roundTemperature(cityDataCurrent.main.temp_min)}°C,
          maximale : {roundTemperature(cityDataCurrent.main.temp_max)}°C.
        </li>
        <li>
          Soleil : levé{" "}
          {convertUnix(cityDataCurrent.sys.sunrise, cityDataCurrent.timezone)},
          couché : à{" "}
          {convertUnix(cityDataCurrent.sys.sunset, cityDataCurrent.timezone)}.
          Ensoleillement :{" "}
          <strong>
            {sunshineCalculator(
              cityDataCurrent.sys.sunrise,
              cityDataCurrent.sys.sunset
            )}
          </strong>
        </li>
      </ul>
      <h4>Les prévisions pour demain</h4>
      <div className="wrapperTable">
        <table border="1">
          <thead>
            <tr>
              <th>Heure</th>
              <th>Température</th>
              <th>Ciel</th>
              <th>Pluie</th>
            </tr>
          </thead>
          <tbody>
            {cityDataForecast.list.map((time) => (
              <tr key={time.dt_txt}>
                <td>{time.dt_txt.slice(11, 16)}</td>
                <td>{roundTemperature(time.main.temp)} °C </td>
                <td>
                  {
                    <img
                      src={`https://openweathermap.org/img/wn/${time.weather[0].icon}@2x.png`}
                      alt={time.weather[0].description}
                    />
                  }
                </td>
                <td>{Math.round(time.pop * 100)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </details>
  );
}

CityCard.propTypes = {
  name: PropTypes.string,
};
