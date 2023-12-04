import { CarouselContainer } from "./styles";
import Slider from "react-slick";
import CocktailCard from "../CocktailCard/CocktailCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const CocktailCarousel = ({ cocktails }) => {
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
