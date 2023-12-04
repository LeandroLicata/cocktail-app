import { NavbarWrapper, NavbarLink, CenteredIcon } from "./styles";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <CenteredIcon icon="emojione-v1:cocktail-glass" />
      <NavbarLink href="/">Menú</NavbarLink>
      <NavbarLink href="#">Recetas</NavbarLink>
    </NavbarWrapper>
  );
};

export default Navbar;
