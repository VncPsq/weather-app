import { useEffect, useState } from "react";

export default function CityCard({ name }) {
  const [cityData, setCityData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  console.info("coucou" + cityData.name);

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
        {name}
        <img
          src={`https://openweathermap.org/img/wn/${cityData.weather[0].icon}@2x.png`}
          alt=""
        />
        | {Math.floor(cityData.main.temp)} °C
      </summary>
      <ul>
        <li>
          Conditions météorologiques : <strong>{cityData.weather[0].description}</strong>.
        </li>
        Aujourd&apos;hui, le ciel de {name} est{" "}
        <strong>{cityData.weather[0].description}</strong>. La température est
        de{" "}
        <strong>
          19.8 °C, la minimale étant de 18.3°C et la maximale étant de 20.56°C.
        </strong>
        . Le soleil se lèvera à HH:MM et se couchera à HH:MM.{" "}
      </ul>
    </details>
  );
}
