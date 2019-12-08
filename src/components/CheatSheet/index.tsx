import React from "react";
import styled from "styled-components";

import Header from "../Header";
import Card from "../Card";
import CardTitle from "../CardTitle";
import Code from "../Code";

import codes from "./codes";

import { ReactComponent as AppendVector1Svg } from "./AppendVector1.svg";
import { ReactComponent as AppendVector2Svg } from "./AppendVector2.svg";
import { ReactComponent as CopySvg } from "./Copy.svg";
import { ReactComponent as CutSvg } from "./Cut.svg";
import { ReactComponent as Delete1Svg } from "./Delete1.svg";
import { ReactComponent as DeleteWithoutPreservingOrderSvg } from "./DeleteWithoutPreservingOrder.svg";
import { ReactComponent as CutGCSvg } from "./CutGC.svg";
import { ReactComponent as DeleteGCSvg } from "./DeleteGC.svg";
import { ReactComponent as DeleteWithoutPreservingOrderGCSvg } from "./DeleteWithoutPreservingOrderGC.svg";
import { ReactComponent as ExpandSvg } from "./Expand.svg";
import { ReactComponent as ExtendSvg } from "./Extend.svg";
import { ReactComponent as FilterSvg } from "./Filter.svg";
import { ReactComponent as Insert } from "./Insert.svg";
import { ReactComponent as InsertVector } from "./InsertVector.svg";
import { ReactComponent as Push } from "./Push.svg";
import { ReactComponent as Pop } from "./Pop.svg";
import { ReactComponent as Unshift } from "./Unshift.svg";
import { ReactComponent as Shift } from "./Shift.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: start;
  height: 120rem;
`;

const Breaker = styled.div`
  with: 0;
  height: 0;
  break-after: always;
`;

const Separator = styled.hr`
  margin: 1rem 0;
  border: 1px solid lightgray;
`;

const CheatSheet: React.FC = () => {
  return (
    <Container>
      <Header
        title="Go Slice Tricks Cheat Sheet"
        link="https://github.com/golang/go/wiki/SliceTricks"
      />
      <Card>
        <CardTitle>AppendVector</CardTitle>
        <div style={{ display: 'flex',alignContent: 'center' }}>
          <AppendVector1Svg />
        </div>
        <Separator />
        <AppendVector2Svg />
        <Code>{codes.AppendVector}</Code>
      </Card>
      <Card>
        <CardTitle>Copy</CardTitle>
        <CopySvg />
        <Code>{codes.Copy[0]}</Code>
        <Separator />
        <Code>{codes.Copy[1]}</Code>
        <Separator />
        <Code>{codes.Copy[2]}</Code>
      </Card>
      <Card>
        <CardTitle>Cut</CardTitle>
        <CutSvg />
        <Code>{codes.Cut}</Code>
      </Card>
      <Card>
        <CardTitle>Delete</CardTitle>
        <Delete1Svg />
        <Code>{codes.Delete[0]}</Code>
        <Separator />
        <Code>{codes.Delete[1]}</Code>
      </Card>
      <Card>
        <CardTitle>Delete without preserving order</CardTitle>
        <DeleteWithoutPreservingOrderSvg />
        <Code>{codes["Delete without preserving order"]}</Code>
      </Card>
      <Card>
        <CardTitle>Cut (GC)</CardTitle>
        <CutGCSvg />
        <Code>{codes["Cut (GC)"]}</Code>
      </Card>
      <Card>
        <CardTitle>Delete (GC)</CardTitle>
        <DeleteGCSvg />
        <Code>{codes["Delete (GC)"]}</Code>
      </Card>
      <Card>
        <CardTitle>Delete without preserving order (GC)</CardTitle>
        <DeleteWithoutPreservingOrderGCSvg />
        <Code>{codes["Delete without preserving order (GC)"]}</Code>
      </Card>
      <Card>
        <CardTitle>Expand</CardTitle>
        <ExpandSvg />
        <Code>{codes.Expand}</Code>
      </Card>
      <Card>
        <CardTitle>Extend</CardTitle>
        <ExtendSvg />
        <Code>{codes.Extend}</Code>
      </Card>
      <Card>
        <CardTitle>Filter (in place)</CardTitle>
        <FilterSvg />
        <Code>{codes["Filter (in place)"]}</Code>
      </Card>
      <Card>
        <CardTitle>Insert</CardTitle>
        <Insert />
        <Code>{codes.Insert}</Code>
      </Card>
      <Card>
        <CardTitle>InsertVector</CardTitle>
        <InsertVector />
        <Code>{codes.InsertVector}</Code>
      </Card>
      <Card>
        <CardTitle>Push</CardTitle>
        <Push />
        <Code>{codes.Push}</Code>
      </Card>
      <Card>
        <CardTitle>Pop</CardTitle>
        <Pop />
        <Code>{codes.Pop}</Code>
      </Card>
      <Card>
        <CardTitle>Push Front/Unshift</CardTitle>
        <Unshift />
        <Code>{codes["Push Front/Unshift"]}</Code>
      </Card>
      <Card>
        <CardTitle>Pop Front/Shift</CardTitle>
        <Shift />
        <Code>{codes["Pop Front/Shift"]}</Code>
      </Card>
    </Container>
  );
};

export default CheatSheet;
