import { SearchContainer, Search, SearchButton } from "./styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ filter }) => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(`Buscando "${searchText}" por ${filter}`);
    // navigate(`/results?type=${filter}&value=${searchText}`);
    navigate(`/results?type=name&value=${searchText}`);
  };

  return (
    <SearchContainer>
      <Search
        type="search"
        placeholder={`Busca el trago por ${
          filter === "name"
            ? "nombre"
            : filter === "ingredients"
            ? "ingredientes"
            : "categorías"
        }`}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <SearchButton onClick={handleSearch}>Buscar</SearchButton>
    </SearchContainer>
  );
};

export default SearchBar;
