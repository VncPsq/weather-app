import { useState } from "react";

export default function SearchBar() {
  const [searchCity, setSearchCity] = useState("");
  const [cityDataSearched, setcityDataSearched] = useState({});

  const handlerOnChange = (e) => setSearchCity(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault(); 
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchCity}&units=metric&lang=fr&appid=${
        import.meta.env.VITE_APP_ID
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch current data");
        }
        return response.json();
      })
      .then((cityData) => {
        setcityDataSearched(cityData);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  console.info("search: " + searchCity);
  console.info("fetched city: " + cityDataSearched.main.temp);

  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="site-search">Ajouter une ville :</label>
      <input
        type="search"
        id="site-search"
        name="search"
        value={searchCity}
        onChange={handlerOnChange}
        placeholder={`Entrez le nom d'une ville 🔎`}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}
