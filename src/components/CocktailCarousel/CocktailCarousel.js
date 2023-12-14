import { CarouselContainer, NoResults } from "./styles";
import Slider from "react-slick";
import CocktailCard from "../CocktailCard/CocktailCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CocktailCarousel = ({ cocktails, value }) => {
  const slidesToShow = cocktails?.length >= 3 ? 3 : cocktails?.length;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <CarouselContainer>
      {slidesToShow ? (
        <Slider {...settings}>
          {cocktails?.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        </Slider>
      ) : (
        <NoResults>No hay resultados disponibles para {value}</NoResults>
      )}
    </CarouselContainer>
  );
};

export default CocktailCarousel;
