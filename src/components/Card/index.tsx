import React from "react";
import styled from "styled-components";

const Container = styled.div`
  min-width: 35rem;
  max-width: 35rem;
  padding: 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 0 0.4rem gray;

  @media (max-width: calc(35rem * 1 + 16px * 0 + 4rem)) {
    min-width: 100%;
    max-width: 100%;
  }
`;

const Card: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
