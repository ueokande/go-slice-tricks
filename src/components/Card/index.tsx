import React from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 35rem;
  border: 1px solid lightgray;
  padding: 0.5rem;
`;

const Card: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Card;
