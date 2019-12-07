import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.2rem;
  line-height: 1.5rem;
  margin: .5rem 0;
`;

const CardTitle: React.FC = ({ children }) => {
  return <Title>{children}</Title>;
};

export default CardTitle;
