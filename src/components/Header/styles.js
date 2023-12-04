import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 85vh;
`;

export const BlackBackground = styled.div`
  flex: 1;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 20px;
  padding-left: 8rem;
`;

export const HeaderTitle = styled.h1`
  padding-right: 4rem;
`;

export const HeaderText = styled.h4`
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 5rem;
`;

export const Button = styled.button`
  color: ${(props) => (props.selected ? "#ffde59" : "white")};
  background-color: black;
  border: 1px solid ${(props) => (props.selected ? "#ffde59" : "white")};
  border-radius: 1.5rem;
  padding: 0.65rem 1rem;
  cursor: pointer;
  font-size: 11px;
`;

export const ImageBackground = styled.div`
  flex: 2;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url("/cocteles.jpeg");
  background-size: cover;
  background-position: left;
`;

export const SearchContainer = styled.form`
  display: flex;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const SearchBar = styled.input`
  flex: 1;
  background-color: white;
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
`;
