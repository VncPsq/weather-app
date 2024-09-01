export default function SearchBar() {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="site-search">
        Ajouter une ville
      </label>
      <input
        className="searchbar"
        type="search"
        id="site-search"
        name="search"
   
        placeholder={`Recherchez parmi les villes disponibles 🔎`}
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}
