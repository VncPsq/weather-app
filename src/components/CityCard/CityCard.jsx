import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { convertUnix, sunshineCalculator } from "../../services/timeConverter";
import roundTemperature from "../../services/roundTemperature";

export default function CityCard({ name }) {
  const [cityData, setCityData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&units=metric&lang=fr&appid=${
        import.meta.env.VITE_APP_ID
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((cityData) => {
        setCityData(cityData);
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
      <summary>
        <strong>{cityData.name}</strong>
        <img
          src={`https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`}
          alt=""
        />
        | {roundTemperature(cityData.main.temp)} °C
      </summary>
      <ul>
        <li>
          Conditions météorologiques :{" "}
          <strong>{cityData.weather[0].description}</strong>.
        </li>
        <li>
          Température :{" "}
          <strong>{roundTemperature(cityData.main.temp)} °C</strong>, minimale :{" "}
          {roundTemperature(cityData.main.temp_min)}°C, maximale :{" "}
          {roundTemperature(cityData.main.temp_max)}°C.
        </li>
        <li>
          Soleil : levé {convertUnix(cityData.sys.sunrise, cityData.timezone)},
          couché : à {convertUnix(cityData.sys.sunset, cityData.timezone)}.
          Ensoleillement :{" "}
          <strong>
            {sunshineCalculator(cityData.sys.sunrise, cityData.sys.sunset)}
          </strong>
        </li>
      </ul>
    </details>
  );
}

CityCard.propTypes = {
  name: PropTypes.string,
};
