import {
  Container,
  CardContainer,
  ImageContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardButton,
  TextContainer,
  Title,
  Highlighted,
  Text,
} from "./styles";
import useRandomCocktail from "../../hooks/useRandomCocktail";

const ChosenDrink = () => {
  const { randomCocktail } = useRandomCocktail();
  return (
    <Container>
      <CardContainer>
        <ImageContainer>
          <CardImage src={randomCocktail?.strDrinkThumb} alt="Cocktail" />
        </ImageContainer>
        <CardContent>
          <CardTitle>{randomCocktail?.strDrink}</CardTitle>
          <CardDescription>{randomCocktail?.strInstructions}</CardDescription>
          <CardButton>Ver receta</CardButton>
        </CardContent>
      </CardContainer>
      
      <TextContainer>
        <Title>
          Los tragos <Highlighted>más elegidos</Highlighted>
        </Title>
        <Text>¡Explora un mundo de sabores en cada sorbo!</Text>
        <Text>
          Descubre nuestra exquisita selección de tragos, donde cada día te
          presentamos las opciones mas elegantes y cautivadoras.
        </Text>
        <Text>
          ¡Deleita tus sentidos con nuestras creaciones únicas y vive momentos
          inolvidables con cada copa!
        </Text>
      </TextContainer>
    </Container>
  );
};

export default ChosenDrink;
