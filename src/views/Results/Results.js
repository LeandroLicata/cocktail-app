import { Container, SearchBar, ResultNumber, ResultText } from "./styles";
import useGetCocktails from "../../hooks/useGetCocktails";
import CocktailCarousel from "../../components/CocktailCarousel/CocktailCarousel";

const Results = () => {
  const { cocktails, type, value } = useGetCocktails();

  return (
    <Container>
      <SearchBar type="search" defaultValue={value}/>
      <ResultNumber>{cocktails?.length} Resultados en tu búsqueda</ResultNumber>
      <ResultText>Explora las siguientes opciones</ResultText>
      <CocktailCarousel cocktails={cocktails} />
    </Container>
  );
};

export default Results;
