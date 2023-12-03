import {
  Container,
  BlackBackground,
  ImageBackground,
  HeaderTitle,
  HeaderText,
  ButtonContainer,
  Button,
  SearchContainer,
  SearchBar,
  SearchButton,
} from "./styles";
import React, { useState } from "react";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [filter, setFilter] = useState("name"); // Por defecto, busca por nombre

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    // Aquí podrías hacer algo más si es necesario al cambiar el filtro
  };

  const handleSearch = () => {
    // Aquí puedes realizar la lógica para redirigir o hacer la solicitud a otro endpoint
    console.log(`Buscando "${searchText}" por ${filter}`);
  };

  return (
    <Container>
      <BlackBackground>
        <HeaderTitle>Encuentra las mejores recetas en Cócteles</HeaderTitle>
        <div>
          <HeaderText>¿Qué trago te gustaría preparar hoy?</HeaderText>

          <ButtonContainer>
            <Button
              selected={filter === "name"}
              onClick={() => handleFilterChange("name")}
            >
              Por nombre
            </Button>
            <Button
              selected={filter === "ingredients"}
              onClick={() => handleFilterChange("ingredients")}
            >
              Por ingredientes
            </Button>
            <Button
              selected={filter === "categories"}
              onClick={() => handleFilterChange("categories")}
            >
              Por categorías
            </Button>
          </ButtonContainer>

          <SearchContainer>
            <SearchBar
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
        </div>
      </BlackBackground>
      <ImageBackground />
    </Container>
  );
};

export default Header;
