import styled from "styled-components";

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
