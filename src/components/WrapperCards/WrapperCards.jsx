import CityCard from "../CityCard/CityCard";
import cities from "../../services/cityData";

export default function WrapperCards() {

  return (
    <div className="wrapperCards">
      WrapperCards coucou
      {cities.map((city) => (
        <CityCard key={city.id} name={city.name} />
      ))}
    </div>
  );
}
