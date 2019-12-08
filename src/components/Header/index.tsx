import React from "react";
import Card from "../Card";
import styled from "styled-components";

interface Props {
  title: string;
  link: string;
}

const Container = styled.div`
  background-color: #333;
  color: white;
  max-width: 35rem;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0 0 0.4rem gray;
`;

const Title = styled.h1``;

const Link = styled.a`
  &:link,
  &:visited {
    color: unset;
    text-decoration: none;
  }
  &:hover,
  &:active {
    color: unset;
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
