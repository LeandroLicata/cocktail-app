import { CarouselContainer } from "./styles";
import Slider from "react-slick";
import CocktailCard from "../CocktailCard/CocktailCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CocktailCarousel = ({ cocktails }) => {
  // Determinar dinámicamente el número de tarjetas a mostrar
  const slidesToShow = cocktails.length >= 3 ? 3 : cocktails.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  return (
    <CarouselContainer>
      <Slider {...settings}>
        {cocktails?.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
      </Slider>
    </CarouselContainer>
  );
};

export default CocktailCarousel;
