import styled from "styled-components";

export const SearchBar = styled.input`
  background-color: white;
  color: black;
  border-radius: 1.5rem;
  padding: 0.65rem 1rem;
  border: none;
  height: 2rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    width: 20rem;
  }
`;
