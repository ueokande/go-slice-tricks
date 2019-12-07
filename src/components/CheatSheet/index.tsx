import React from "react";
import styled from "styled-components";

import Header from "../Header";
import HeaderTitle from "../HeaderTitle";
import Card from "../Card";
import CardTitle from "../CardTitle";

const Container = styled.div``;

const CheatSheet: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Go Slice Tricks Cheat Sheet</HeaderTitle>
      </Header>
      <Card>
        <CardTitle>Copy</CardTitle>
      </Card>
      <Card>
        <CardTitle>Cut</CardTitle>
      </Card>
      <Card>
        <CardTitle>Delete</CardTitle>
      </Card>
      <Card>
        <CardTitle>Delete without preserving order</CardTitle>
      </Card>
      <Card>
        <CardTitle>Delete without preserving order</CardTitle>
      </Card>
      <Card>
        <CardTitle>Cut (GC)</CardTitle>
      </Card>
      <Card>
        <CardTitle>Delete (GC)</CardTitle>
      </Card>
      <Card>
        <CardTitle>Delete without preserving order (GC)</CardTitle>
      </Card>
      <Card>
        <CardTitle>Expand</CardTitle>
      </Card>
      <Card>
        <CardTitle>Extend</CardTitle>
      </Card>
      <Card>
        <CardTitle>Filter (in place)</CardTitle>
      </Card>
      <Card>
        <CardTitle>Insert</CardTitle>
      </Card>
      <Card>
        <CardTitle>Insert vector</CardTitle>
      </Card>
      <Card>
        <CardTitle>Push</CardTitle>
      </Card>
      <Card>
        <CardTitle>Push Front/Unshift</CardTitle>
      </Card>
      <Card>
        <CardTitle>Pop Front/Shift</CardTitle>
      </Card>
    </Container>
  );
};

export default CheatSheet;
