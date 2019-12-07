import React from "react";
import styled from "styled-components";

import Header from "../Header";
import HeaderTitle from "../HeaderTitle";
import Card from "../Card";
import CardTitle from "../CardTitle";
import Code from "../Code";
import codes from "./codes";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Separator = styled.hr``;

const CheatSheet: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Go Slice Tricks Cheat Sheet</HeaderTitle>
      </Header>
      <Card>
        <CardTitle>AppendVector</CardTitle>
        <Code>{codes.AppendVector}</Code>
      </Card>
      <Card>
        <CardTitle>Copy</CardTitle>
        <Code>{codes.Copy[0]}</Code>
        <Separator />
        <Code>{codes.Copy[1]}</Code>
        <Separator />
        <Code>{codes.Copy[2]}</Code>
      </Card>
      <Card>
        <CardTitle>Cut</CardTitle>
        <Code>{codes.Cut}</Code>
      </Card>
      <Card>
        <CardTitle>Delete</CardTitle>
        <Code>{codes.Delete[0]}</Code>
        <Separator />
        <Code>{codes.Delete[1]}</Code>
      </Card>
      <Card>
        <CardTitle>Delete without preserving order</CardTitle>
        <Code>{codes["Delete without preserving order"]}</Code>
      </Card>
      <Card>
        <CardTitle>Cut (GC)</CardTitle>
        <Code>{codes["Cut (GC)"]}</Code>
      </Card>
      <Card>
        <CardTitle>Delete (GC)</CardTitle>
        <Code>{codes["Delete (GC)"]}</Code>
      </Card>
      <Card>
        <CardTitle>Delete without preserving order (GC)</CardTitle>
        <Code>{codes["Delete without preserving order (GC)"]}</Code>
      </Card>
      <Card>
        <CardTitle>Expand</CardTitle>
        <Code>{codes.Expand}</Code>
      </Card>
      <Card>
        <CardTitle>Extend</CardTitle>
        <Code>{codes.Extend}</Code>
      </Card>
      <Card>
        <CardTitle>Filter (in place)</CardTitle>
        <Code>{codes["Filter (in place)"]}</Code>
      </Card>
      <Card>
        <CardTitle>Insert</CardTitle>
        <Code>{codes.Insert}</Code>
      </Card>
      <Card>
        <CardTitle>InsertVector</CardTitle>
        <Code>{codes.InsertVector}</Code>
      </Card>
      <Card>
        <CardTitle>Push</CardTitle>
        <Code>{codes.Push}</Code>
      </Card>
      <Card>
        <CardTitle>Pop</CardTitle>
        <Code>{codes.Pop}</Code>
      </Card>
      <Card>
        <CardTitle>Push Front/Unshift</CardTitle>
        <Code>{codes["Push Front/Unshift"]}</Code>
      </Card>
      <Card>
        <CardTitle>Pop Front/Shift</CardTitle>
        <Code>{codes["Pop Front/Shift"]}</Code>
      </Card>
    </Container>
  );
};

export default CheatSheet;
