import {
  Container,
  BlackBackground,
  ImageBackground,
  HeaderTitle,
  HeaderText,
} from "./styles";
import { useState } from "react";
import FilterButtons from "../FilterButtons/FilterButtons";
import SearchBar from "../SearchBar/SearchBar";

const Header = () => {
  const [filter, setFilter] = useState("name");

  return (
    <Container>
      <BlackBackground>
        <HeaderTitle>Encuentra las mejores recetas en Cócteles</HeaderTitle>
        <div>
          <HeaderText>¿Qué trago te gustaría preparar hoy?</HeaderText>
          <FilterButtons filter={filter} setFilter={setFilter} />
          <SearchBar filter={filter} />
        </div>
      </BlackBackground>
      <ImageBackground />
    </Container>
  );
};

export default Header;
