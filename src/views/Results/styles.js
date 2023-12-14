import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-image: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url("/cocteles.jpeg");
  background-size: cover;
  background-position: center;
  padding: 0 8rem;

  @media (max-width: 767px) {
    padding: 0 2rem;
  }

  @media (min-width: 768px) {
    
  }
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
