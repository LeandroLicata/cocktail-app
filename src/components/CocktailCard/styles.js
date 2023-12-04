import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px; 
  height: 375px; 
  border-radius: 1rem; 
  overflow: hidden;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
`;

export const ImageContainer = styled.div`
  height: 40%; 
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem; 
`;

export const CardTitle = styled.h2`
  margin-bottom: 7px;
  font-size: 1.2rem; 
  max-height: 1.6rem;
  overflow: auto;
`;

export const CardDescription = styled.p`
  color: black;
  text-align: center;
  font-weight: 500;
  overflow: auto;
  height: 5.3rem;
`;

export const CardButton = styled.button`
  color: black;
  background-color: #ffde59;
  border-radius: 1rem; 
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  font-weight: 600;
  transition: background-color 0.3s ease; 

  &:hover {
    background-color: #ffd200; 
  }
`;
