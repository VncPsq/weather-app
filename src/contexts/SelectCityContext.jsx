import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const SelectContext = createContext();

export function SelectProvider({ children }) {
  const [selectCity, setSelectCity] = useState("");
  const [favoritesCities, setFavoritesCities] = useState([]);


  const handlerOnChange = (e) => setSelectCity(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (selectCity && !favoritesCities.includes(selectCity)) {
      setFavoritesCities([...favoritesCities, selectCity]);
    }
  };

  return (
    <SelectContext.Provider
      value={{ selectCity, favoritesCities, handleOnSubmit, handlerOnChange }}
    >
      {children}
    </SelectContext.Provider>
  );
}

SelectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSelect = () => useContext(SelectContext);
