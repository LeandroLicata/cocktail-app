import styled from "styled-components";
import { Icon } from "@iconify/react";

export const Container = styled.div`
  background-color: #383838;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    height: 100vh;
    padding: 0 8rem;
  }

  @media (max-width: 767px) {
    padding: 2rem;
  }
`;

export const TextContainer = styled.div`
  color: white;
  font-size: 20px;
`;

export const Title = styled.h2`
  font-weight: 500;
  padding-bottom: 1rem;
`;

export const Highlighted = styled.span`
  color: #ffde59;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid #ffde59;
`;

export const CardContainer = styled.div`
  border-radius: 1.5rem;
  background-color: #f1f1f1;

  @media (max-width: 767px) {
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SubscribeContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
  align-items: center;
`;

export const EmailInput = styled.input`
  color: black;
  background-color: white;
  border-radius: 1.5rem;
  padding: 0.65rem 0rem;
  border: none;
  width: 100%;
  text-align: center;

  &::placeholder {
    text-align: center;
  }
`;

export const CheckboxContainer = styled.div`
  padding-top: 2rem;
  display: flex;
  align-items-center;
`;

export const CheckboxLabel = styled.label`
  padding-left: 1rem;
  font-size: 13px;
  font-weight: 600;
`;

export const SubscribeButton = styled.button`
  color: black;
  background-color: #ffde59;
  border-radius: 1.5rem;
  padding: 0.65rem 1rem;
  cursor: pointer;
  border: none;
  font-weight: 600;
  flex: 1;
  width: 100%;
  margin-top: 2rem;

  &:hover {
    background-color: #ffd200;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const CocktailIcon = styled(Icon)`
  color: black;
  font-size: 100px;
`;
