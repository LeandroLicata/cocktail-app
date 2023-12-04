import {
  CardContainer,
  ImageContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardButton,
} from "./styles";

const CocktailCard = ({ cocktail }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <CardImage src={cocktail?.strDrinkThumb} alt="Cocktail" />
      </ImageContainer>
      <CardContent>
        <CardTitle>{cocktail?.strDrink}</CardTitle>
        <CardDescription>{cocktail?.strInstructions}</CardDescription>
        <CardButton>Ver receta</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default CocktailCard;
