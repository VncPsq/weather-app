import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const SelectContext = createContext();

export function SelectProvider({ children }) {
  const [selectCity, setSelectCity] = useState("Sydney");

  const handlerOnChange = (e) => setSelectCity(e.target.value);

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <SelectContext.Provider
      value={{ selectCity, handleOnSubmit, handlerOnChange }}
    >
      {children}
    </SelectContext.Provider>
  );
}

SelectProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useSelect = () => useContext(SelectContext);
