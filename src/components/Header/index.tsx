import React from "react";
import Card from "../Card";
import styled from "styled-components";

interface Props {
  title: string;
  link: string;
}

const Container = styled(Card)``;

const Title = styled.h1``;

const Link = styled.a`
  &:link,
  &:visited {
    color: #333;
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: #333;
    text-decoration: underline;
  }
`;

const Header: React.FC<Props> = ({ title, link }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Link href={link}>{link}</Link>
    </Container>
  );
};

export default Header;
