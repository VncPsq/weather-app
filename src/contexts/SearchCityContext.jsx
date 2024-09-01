import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const SearchContext = createContext();

export function SearchProvider({ children }) {
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

  return (
    <SearchContext.Provider
      value={{ searchCity, cityDataSearched, handleOnSubmit, handlerOnChange }}
    >
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSearch = () => useContext(SearchContext);
