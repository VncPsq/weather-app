import { useSearch } from "../../contexts/SearchCityContext";

export default function SearchBar() {
  const { searchCity, cityDataSearched, handleOnSubmit, handlerOnChange } =
    useSearch();

  console.info("search: " + searchCity);
  console.info(
    "fetched city: " + cityDataSearched.name,
    cityDataSearched.main.temp
  );

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
