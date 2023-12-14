import styled from "styled-components";
import { Icon } from "@iconify/react";

export const NavbarWrapper = styled.nav`
  background-color: #2c2c2c;
  padding-right: 10px;
  color: white;
  display: flex;
  justify-content: space-evenly; 
  align-items: center;
  height: 15vh;
  padding: 0 1rem;

  @media (min-width: 768px) {
    justify-content: flex-end; 
  }
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
  font-size: 48px;

  @media (max-width: 767px) {
    // display: none; 
  }

  @media (min-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
`;
