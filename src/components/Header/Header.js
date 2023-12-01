import { Container, BlackBackground, ImageBackground } from "./styles";

const Header = () => {
  return (
    <Container>
        
      <BlackBackground>
        <p>Texto sobre fondo negro</p>
      </BlackBackground>
      <ImageBackground />
    </Container>
  );
};

export default Header;
