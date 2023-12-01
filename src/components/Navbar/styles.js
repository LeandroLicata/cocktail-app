import styled from "styled-components";
import { Icon } from "@iconify/react";

export const NavbarWrapper = styled.nav`
  background-color: #2c2c2c;
  padding-right: 10px;
  // padding-top: 35px;
  // padding-bottom: 35px;
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0;
  position: sticky;
  height: 15vh;
`;

export const NavbarLink = styled.a`
  color: white;
  text-decoration: none;
  margin: 0 20px;
  cursor: pointer;
  font-weight: 500;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid white;
  }
`;

export const CenteredIcon = styled(Icon)`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  font-size: 48px;
  /* Estilos adicionales según sea necesario para el icono */
`;
