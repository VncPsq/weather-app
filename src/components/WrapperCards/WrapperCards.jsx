import CityCard from "../CityCard/CityCard";
import cities from "../../services/cityData";

export default function WrapperCards() {
  return (
    <section className="wrapperCards">
      
      <h2>Villes disponibles : </h2>
      {cities.map((city) => (
        <CityCard key={city.id} name={city.name} />
      ))}
      
    </section>
  );
}
