import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const SelectContext = createContext();

export function SelectProvider({ children }) {
  const [selectCity, setSelectCity] = useState("");
  const [favoritesCities, setFavoritesCities] = useState([]);

  // catch selected city
  const handlerOnChange = (e) => setSelectCity(e.target.value);

  // store selected city on submit 
  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (selectCity && !favoritesCities.includes(selectCity)) {
      try {
        // const response = await fetch("https://backend.com/favoritescities", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({ cityName: selectCity }),
        // });

        // if (!response.ok) {
        //   throw new Error("Failed to save the city");
        // }

        // const result = await response.json();
        // console.log("City saved:", result);

        setFavoritesCities([...favoritesCities, selectCity]);
      } catch (error) {
        console.error("Error during city submission:", error);
      }
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
