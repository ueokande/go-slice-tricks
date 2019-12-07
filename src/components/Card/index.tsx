import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 35rem;
  padding: 0.5rem;
  margin: .5rem;
  box-shadow: 0 0 .4rem gray;
`;

const Card: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
