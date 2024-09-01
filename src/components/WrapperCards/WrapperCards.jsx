import CityCard from "../CityCard/CityCard";
import cities from "../../services/cityData";
import { useSelect } from "../../contexts/SelectCityContext";

export default function WrapperCards() {
  const { selectCity } = useSelect();

  return (
    <section className="wrapperCards">
      <h2>Villes disponibles : </h2>
      <CityCard name={selectCity} />
      {cities.map((city) => (
        <CityCard key={city.id} name={city.name} />
      ))}
    </section>
  );
}
