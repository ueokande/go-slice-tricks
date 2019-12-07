import React from "react";
import Card from "../Card";
import styled from "styled-components";

const ContentContainer = styled.div`
  background-color: #e0e0e0;
`;

const Header: React.FC = ({ children }) => {
  return (
    <Card>
      <ContentContainer>{children}</ContentContainer>
    </Card>
  );
};

export default Header;
