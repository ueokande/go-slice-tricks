import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  author: string;
  link: string;
}

const Container = styled.div`
  background-color: #333;
  min-width: 32rem;
  max-width: 32rem;
  color: white;
  padding: 1rem;
  margin: 0.5rem;
  box-shadow: 0 0 0.4rem gray;
`;

const Title = styled.h1`
  font-size: 2.2rem;
`;

const Author = styled.p`
  text-align: right;
`;

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

const Header: React.FC<Props> = ({ title, author, link }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>{author} </Author>
      <Link href={link}>{link}</Link>
    </Container>
  );
};

export default Header;
