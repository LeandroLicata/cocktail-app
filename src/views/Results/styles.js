import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url("/cocteles.jpeg");
  background-size: cover;
  background-position: center;
  padding: 0 8rem;
`;

export const SearchBar = styled.input`
  background-color: white;
  border-radius: 1.5rem;
  padding: 0.65rem 1rem;
  border: none;
  height: 2rem;
  width: 20rem;
  margin-top: 2rem;
`;

export const ResultNumber = styled.span`
  color: white;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

export const SliderContainer = styled.div`
  // width: 80%;
  // margin: 0 auto;
  padding-top: 3rem;
`;

export const ResultText = styled.span`
  color: white;
  font-size: 24px;
  padding-bottom: 1rem;
`;
