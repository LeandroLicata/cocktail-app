import { Container, ResultNumber, ResultText } from "./styles";
import useGetCocktails from "../../hooks/useGetCocktails";
import CocktailCarousel from "../../components/CocktailCarousel/CocktailCarousel";
import ResultsSearchBar from "../../components/ResultsSearchBar/ResultsSearchBar";

const Results = () => {
  const { cocktails, type, value } = useGetCocktails();
  const results =
    cocktails?.length === undefined || cocktails?.length === null
      ? 0
      : cocktails?.length;

  return (
    <Container>
      <ResultsSearchBar type={type} value={value} />
      <ResultNumber>{results} Resultados en tu búsqueda</ResultNumber>
      <ResultText>Explora las siguientes opciones</ResultText>
      <CocktailCarousel cocktails={cocktails} value={value} />
    </Container>
  );
};

export default Results;
