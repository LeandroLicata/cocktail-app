import { Container, SearchBar, ResultNumber, ResultText } from "./styles";
import useGetCocktails from "../../hooks/useGetCocktails";
import CocktailCarousel from "../../components/CocktailCarousel/CocktailCarousel";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Results = () => {
  const { cocktails, type, value } = useGetCocktails();
  const results =
    cocktails?.length === undefined || cocktails?.length === null
      ? 0
      : cocktails?.length;
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  return (
    <Container>
      <SearchBar
        type="search"
        defaultValue={value}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder={`Busca el trago por ${
          type === "name"
            ? "nombre"
            : type === "ingredients"
            ? "ingredientes"
            : "categorías"
        }`}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            navigate(`/results?type=${type}&value=${searchValue}`);
          }
        }}
      />
      <ResultNumber>{results} Resultados en tu búsqueda</ResultNumber>
      <ResultText>Explora las siguientes opciones</ResultText>
      <CocktailCarousel cocktails={cocktails} value={value} />
    </Container>
  );
};

export default Results;
