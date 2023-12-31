import styled from "styled-components";

export const Container = styled.div`
  // height: 100vh;
  background-color: #383838;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 767px) {
    flex-direction: column;
  }

  @media (min-width: 768px) {
    height: 100vh;
  }
`;

export const CardContainer = styled.div`
  height: 475px;
  border-radius: 1.5rem;
  overflow: hidden;
  background-color: white;

  @media (max-width: 767px) {
    margin: 2rem;
  }

  @media (min-width: 768px) {
    width: 450px;
    margin-left: 5rem;
  }
`;

export const ImageContainer = styled.div`
  height: 50%;
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
  padding: 0 1rem;
`;

export const CardTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 1.5rem;
`;

export const CardDescription = styled.p`
  color: black;
  text-align: center;
  padding-bottom: 0.5rem;
  font-weight: 500;
  overflow: auto;
  height: 5.3rem;
`;

export const CardButton = styled.button`
  color: black;
  background-color: #ffde59;
  border-radius: 1.5rem;
  padding: 0.65rem 1rem;
  cursor: pointer;
  border: none;
  font-weight: 600;

  &:hover {
    background-color: #ffd200;
  }
`;

export const TextContainer = styled.div`
  color: white;
  font-size: 20px;

  @media (max-width: 767px) {
    margin: 2rem;
  }

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Title = styled.h2`
  font-weight: 500;

  margin-bottom: 4rem;

  @media (min-width: 768px) {
    margin-left: 2rem;
  }

  @media (max-width: 767px) {
    // font-size: 1.7rem;
    margin-bottom: 2.3rem;
  }
`;

export const Highlighted = styled.span`
  color: #ffde59;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid #ffde59;
`;

export const Text = styled.p`
  margin-left: 2rem;
  margin-right: 14rem;

  @media (max-width: 767px) {
    margin: 1rem 0;
  }
`;
