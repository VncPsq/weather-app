import { useEffect } from "react";

export default function WrapperCards() {
  const city = "London";

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&date=2024-08-31&lang=fr&appid=${
        import.meta.env.VITE_APP_ID
      }`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((city) => {
        console.info(city);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  }, []);

  return <div className="wrapperCards">WrapperCards</div>;
}
