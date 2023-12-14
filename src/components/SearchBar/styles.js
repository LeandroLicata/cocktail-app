import styled from "styled-components";

export const SearchContainer = styled.form`
  display: flex;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
`;

export const Search = styled.input`
  flex: 1;
  background-color: white;
  color: black;
  border-radius: 1.5rem;
  padding: 0.65rem 1rem;
  border: none;
`;

export const SearchButton = styled.button`
  flex: 0;
  color: black;
  background-color: #ffde59;
  border-radius: 1.5rem;
  padding: 0.65rem 1rem;
  cursor: pointer;
  margin-left: 0.5rem;
  border: none;
  font-weight: 600;

  &:hover {
    background-color: #ffd200;
  }
`;
