import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  author: string;
  authorLink: string;
  link: string;
}

const Container = styled.div`
  background-color: #333;
  min-width: 35rem;
  max-width: 35rem;
  color: white;
  padding: 1rem;
  margin: 0.5rem 0;
  box-shadow: 0 0 0.4rem gray;

  @media (max-width: calc(35rem * 1 + 16px * 0 + 4rem)) {
    min-width: 100%;
    max-width: 100%;
  }
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

const Header: React.FC<Props> = ({ title, author, authorLink, link }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Author>
        <Link href={authorLink}>{author}</Link>{" "}
      </Author>
      <Link href={link}>{link}</Link>
    </Container>
  );
};

export default Header;
