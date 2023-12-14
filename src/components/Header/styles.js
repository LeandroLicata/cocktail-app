import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 85vh;

  @media (min-width: 768px) {
    flex-direction: row; 
  }
`;

export const BlackBackground = styled.div`
  flex: 1;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  font-size: 20px;
  padding: 2rem; 

  @media (min-width: 768px) {
    padding-left: 8rem;
  }
`;

export const HeaderTitle = styled.h1`
  padding-right: 4rem;
  margin-bottom: 1rem; 

  @media (max-width: 767px) {
    padding: 0; 
  }
`;

export const HeaderText = styled.h4`
  font-weight: 500;
  margin-bottom: 1rem; 
`;

export const ImageBackground = styled.div`
  flex: 2;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url("/cocteles.jpeg");
  background-size: cover;
  background-position: left;

  @media (max-width: 767px) {
    display: none;
  }
`;
