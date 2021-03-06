import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-component";

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
import { ReactComponent as InsertSvg } from "./Insert.svg";
import { ReactComponent as InsertVectorSvg } from "./InsertVector.svg";
import { ReactComponent as PushSvg } from "./Push.svg";
import { ReactComponent as PopSvg } from "./Pop.svg";
import { ReactComponent as UnshiftSvg } from "./Unshift.svg";
import { ReactComponent as ShiftSvg } from "./Shift.svg";

const Separator = styled.hr`
  margin: 1.2rem 0;
  border: 1px solid lightgray;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: calc(35rem * 1 + 16px * 0 + 4rem)) {
    min-width: 100%;
    max-width: 100%;
    padding: 0 0;
  }

  @media (min-width: calc(35rem * 1 + 16px * 0 + 4rem)) {
    min-width: calc(35rem * 1 + 16px * 0 + 4rem);
    max-width: calc(35rem * 1 + 16px * 0 + 4rem);
  }

  @media (min-width: calc(35rem * 2 + 16px * 1 + 4rem)) {
    min-width: calc(35rem * 2 + 16px * 1 + 4rem);
    max-width: calc(35rem * 2 + 16px * 1 + 4rem);
  }

  @media (min-width: calc(35rem * 3 + 16px * 2 + 4rem)) {
    min-width: calc(35rem * 3 + 16px * 2 + 4rem);
    max-width: calc(35rem * 3 + 16px * 2 + 4rem);
  }

  @media (min-width: calc(35rem * 4 + 16px * 3 + 4rem)) {
    min-width: calc(35rem * 4 + 16px * 3 + 4rem);
    max-width: calc(35rem * 4 + 16px * 3 + 4rem);
  }

  min-width: 100%;
`;

const SvgContainer = styled.div`
  display: flex;
  content-align: center;
`;

const CheatSheet: React.FC = () => {
  return (
    <Container>
      <Masonry
        options={{
          gutter: 16
        }}
      >
        <Header
          title="Go Slice Tricks Cheat Sheet"
          author="@ueokande"
          authorLink="https://github.com/ueokande/go-slice-tricks"
          link="https://github.com/golang/go/wiki/SliceTricks"
        />
        <Card>
          <CardTitle>AppendVector</CardTitle>
          <SvgContainer>
            <AppendVector1Svg />
          </SvgContainer>
          <Separator />
          <SvgContainer>
            <AppendVector2Svg />
          </SvgContainer>
          <Code>{codes.AppendVector}</Code>
        </Card>
        <Card>
          <CardTitle>Copy</CardTitle>
          <SvgContainer>
            <CopySvg />
          </SvgContainer>
          <Code>{codes.Copy[0]}</Code>
          <Separator />
          <Code>{codes.Copy[1]}</Code>
          <Separator />
          <Code>{codes.Copy[2]}</Code>
        </Card>
        <Card>
          <CardTitle>Cut</CardTitle>
          <SvgContainer>
            <CutSvg />
          </SvgContainer>
          <Code>{codes.Cut}</Code>
        </Card>
        <Card>
          <CardTitle>Delete</CardTitle>
          <SvgContainer>
            <Delete1Svg />
          </SvgContainer>
          <Code>{codes.Delete[0]}</Code>
          <Separator />
          <Code>{codes.Delete[1]}</Code>
        </Card>
        <Card>
          <CardTitle>Delete without preserving order</CardTitle>
          <SvgContainer>
            <DeleteWithoutPreservingOrderSvg />
          </SvgContainer>
          <Code>{codes["Delete without preserving order"]}</Code>
        </Card>
        <Card>
          <CardTitle>Cut (GC)</CardTitle>
          <SvgContainer>
            <CutGCSvg />
          </SvgContainer>
          <Code>{codes["Cut (GC)"]}</Code>
        </Card>
        <Card>
          <CardTitle>Delete (GC)</CardTitle>
          <SvgContainer>
            <DeleteGCSvg />
          </SvgContainer>
          <Code>{codes["Delete (GC)"]}</Code>
        </Card>
        <Card>
          <CardTitle>Delete without preserving order (GC)</CardTitle>
          <SvgContainer>
            <DeleteWithoutPreservingOrderGCSvg />
          </SvgContainer>
          <Code>{codes["Delete without preserving order (GC)"]}</Code>
        </Card>
        <Card>
          <CardTitle>Expand</CardTitle>
          <SvgContainer>
            <ExpandSvg />
          </SvgContainer>
          <Code>{codes.Expand}</Code>
        </Card>
        <Card>
          <CardTitle>Extend</CardTitle>
          <SvgContainer>
            <ExtendSvg />
          </SvgContainer>
          <Code>{codes.Extend}</Code>
        </Card>
        <Card>
          <CardTitle>Filter (in place)</CardTitle>
          <SvgContainer>
            <FilterSvg />
          </SvgContainer>
          <Code>{codes["Filter (in place)"]}</Code>
        </Card>
        <Card>
          <CardTitle>Insert</CardTitle>
          <SvgContainer>
            <InsertSvg />
          </SvgContainer>
          <Code>{codes.Insert}</Code>
        </Card>
        <Card>
          <CardTitle>InsertVector</CardTitle>
          <SvgContainer>
            <InsertVectorSvg />
          </SvgContainer>
          <Code>{codes.InsertVector}</Code>
        </Card>
        <Card>
          <CardTitle>Push</CardTitle>
          <SvgContainer>
            <PushSvg />
          </SvgContainer>
          <Code>{codes.Push}</Code>
        </Card>
        <Card>
          <CardTitle>Pop</CardTitle>
          <SvgContainer>
            <PopSvg />
          </SvgContainer>
          <Code>{codes.Pop}</Code>
        </Card>
        <Card>
          <CardTitle>Push Front/Unshift</CardTitle>
          <SvgContainer>
            <UnshiftSvg />
          </SvgContainer>
          <Code>{codes["Push Front/Unshift"]}</Code>
        </Card>
        <Card>
          <CardTitle>Pop Front/Shift</CardTitle>
          <SvgContainer>
            <ShiftSvg />
          </SvgContainer>
          <Code>{codes["Pop Front/Shift"]}</Code>
        </Card>
      </Masonry>
    </Container>
  );
};

export default CheatSheet;
