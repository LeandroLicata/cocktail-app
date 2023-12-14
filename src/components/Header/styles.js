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

export const ImageBackground = styled.div`
  flex: 2;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url("/cocteles.jpeg");
  background-size: cover;
  background-position: left;
`;
