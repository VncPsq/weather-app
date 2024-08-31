// import { useEffect } from "react";

export default function CityCard({ name }) {
  //   useEffect(() => {
  //     fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=${name}&lang=fr&appid=${
  //         import.meta.env.VITE_APP_ID
  //       }`
  //     )
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Failed to fetch data");
  //         }
  //         return response.json();
  //       })
  //       .then((city) => {
  //         console.info(city.name);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching data", error);
  //       });
  //   }, [name]);

  return (
    <details>
      <summary>{name}</summary>
      <p>Here is the content!</p>
    </details>
  );
}
