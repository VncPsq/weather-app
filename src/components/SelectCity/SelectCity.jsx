import { useSelect } from "../../contexts/SelectCityContext";

export default function SelectCity() {
  const { selectCity, handleOnSubmit, handlerOnChange } = useSelect();


  return (
    <form onSubmit={handleOnSubmit}>
      <label htmlFor="site-select">Choisissez une ville :</label>
      <select id="city-select" value={selectCity} onChange={handlerOnChange}>
        <option value="Sydney">Sydney</option>
        <option value="Chicago">Chicago</option>
        <option value="Rome">Rome</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
}
