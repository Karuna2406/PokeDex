const inputElement = document.querySelector("#search-input");
const search_icon = document.querySelector("#search-close-icon");
const sort_wrapper = document.querySelector(".sort-wrapper");

inputElement.addEventListener("input", () => {
  handleInputChange(inputElement);
});
search_icon.addEventListener("click", handleSearchCloseOnClick);
sort_wrapper.addEventListener("click", handleSortIconOnClick);

function handleInputChange(inputElement) {
    const inputValue = inputElement.value.toLowerCase(); // Convert to lowercase for comparison
    if (inputValue !== "") {
      document
        .querySelector("#search-close-icon")
        .classList.add("search-close-icon-visible");
  
      // Use the search functionality here to filter Pokémon based on input
      filterPokemon(inputValue);
    } else {
      document
        .querySelector("#search-close-icon")
        .classList.remove("search-close-icon-visible");
  
      // Show all Pokémon when search is cleared
      displayPokemons(allPokemons);  // Assuming `displayPokemons` is from your other script
    }
  }
  
  function filterPokemon(searchTerm) {
    let filteredPokemons;
  
    if (numberFilter.checked) {
      filteredPokemons = allPokemons.filter((pokemon) => {
        const pokemonID = pokemon.url.split("/")[6];
        return pokemonID.startsWith(searchTerm);
      });
    } else if (nameFilter.checked) {
      filteredPokemons = allPokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().startsWith(searchTerm);
      });
    } else {
      filteredPokemons = allPokemons;
    }
  
    displayPokemons(filteredPokemons);
  
    if (filteredPokemons.length === 0) {
      notFoundMessage.style.display = "block";
    } else {
      notFoundMessage.style.display = "none";
    }
  }
  

function handleSearchCloseOnClick() {
  document.querySelector("#search-input").value = "";
  document
    .querySelector("#search-close-icon")
    .classList.remove("search-close-icon-visible");
}

function handleSortIconOnClick() {
  document
    .querySelector(".filter-wrapper")
    .classList.toggle("filter-wrapper-open");
  document.querySelector("body").classList.toggle("filter-wrapper-overlay");
}