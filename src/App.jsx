import SelectCity from "./components/SelectCity/SelectCity";
import WrapperCards from "./components/WrapperCards/WrapperCards";

export default function App() {
  return (
    <>
      <h1>Prévisions météos</h1>
      <SelectCity />
      <WrapperCards />
    </>
  );
}
