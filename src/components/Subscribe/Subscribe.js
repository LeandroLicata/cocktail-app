import {
  Container,
  TextContainer,
  Title,
  Highlighted,
  CardContainer,
  SubscribeContainer,
  EmailInput,
  CheckboxContainer,
  CheckboxLabel,
  SubscribeButton,
  IconContainer,
  CocktailIcon,
} from "./styles";

const Subscribe = () => {
  return (
    <Container>
      <TextContainer>
        <Title>
          No esperes más, <br />
          conviértete en un <Highlighted>experto coctelero</Highlighted>
        </Title>
        <p>
          Recibe en tu correo las mejores recetas, trucos, consejos y mucho más.
        </p>
      </TextContainer>
      <CardContainer>
        <br />
        <SubscribeContainer>
          <EmailInput
            type="email"
            placeholder="Ingresa tu correo electrónico"
          />
          <CheckboxContainer>
            <input type="checkbox" />
            <CheckboxLabel>Acepto la política de privacidad *</CheckboxLabel>
          </CheckboxContainer>
          <SubscribeButton>Suscribirme ahora</SubscribeButton>
        </SubscribeContainer>
        <IconContainer>
          <CocktailIcon icon="noto-v1:cocktail-glass" />
        </IconContainer>
      </CardContainer>
    </Container>
  );
};

export default Subscribe;
