import CityCard from "../CityCard/CityCard";
import cities from "../../services/cityData";
import { useSelect } from "../../contexts/SelectCityContext";

export default function WrapperCards() {
  const { favoritesCities } = useSelect();

  return (
    <section className="wrapperCards">
      {favoritesCities.length > 0 && (
        <>
          <h2>Villes favorites : </h2>
          {favoritesCities.map((city, index) => (
          <CityCard key={`favorite city ${index}`} name={city} />
          ))}
        </>
      )}
      <h2>Villes disponibles : </h2>
      {cities.map((city) => (
        <CityCard key={city.id} name={city.name} />
      ))}
    </section>
  );
}
