import styled from "@emotion/styled";
import React from "react";
import PeacePhoto from "../images/beach-road.jpg";
import Ph2 from "../images/dark1.jpg";
import DJWedding from "../images/dj-wedding.png";
import DJ2 from "../images/DJ.jpg";
import ClunesPhoto from "../images/mitch-clunes.jpg";
import StockImage from "../images/stock-edit.jpg";
import WeddingPhoto from "../images/wedding1.png";
import BREAKPOINTS from "../shared/breakpoints";

export const Collage = React.memo(() => (
  <CollageWrapper>
    <DJDark src={DJ2} />
    <Photo2 src={Ph2} />

    <Wedding src={WeddingPhoto} />
    <DJLight src={DJWedding} />
    <Sitting src={ClunesPhoto} />

    <Peace src={PeacePhoto} />
    <Stock src={StockImage} />
  </CollageWrapper>
));

const CollageWrapper = styled.div({
  display: "grid",
  gridGap: "16px",
  marginTop: "160px",
  height: "1200px",
  gridTemplateColumns: "repeat(3, [col] 1fr)",
  gridTemplateRows: "repeat(6, [row] 1fr)",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    height: "auto",
    gridTemplateColumns: "repeat(4, [col] 1fr)",
    gridTemplateRows: "repeat(4, [row] 1fr)",
    marginTop: "96px",
  },

  "&>img": {
    borderRadius: "8px",
    height: "100%",
    objectFit: "cover",
    overflow: "hidden",
    width: "100%",
  },
});

// Left
const DJDark = styled.img({
  gridColumn: "1 / span 1",
  gridRow: "1 / span 3",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    gridColumn: "1 / span 2",
    gridRow: "1 / span 2",
  },
});

const Photo2 = styled.img({
  gridColumn: "1 / span 1",
  gridRow: "4 / span 3",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    display: "none",
  },
});

//Middle
const Wedding = styled.img({
  gridColumn: "2 / span 1",
  gridRow: "5 / span 2",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    gridColumn: "3 / span 2",
    gridRow: "1 / span 2",
  },
});

const DJLight = styled.img({
  gridColumn: "2 / span 1",
  gridRow: "3 / span 2",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    gridColumn: "1 / span 2",
    gridRow: "3 / span 2",
  },
});

const Sitting = styled.img({
  gridColumn: "2 / span 2",
  gridRow: "1 / span 2",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    display: "none",
  },
});

// Right
const Peace = styled.img({
  gridColumn: "3 / span 1",
  gridRow: "4 / span 3",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    gridColumn: "3 / span 2",
    gridRow: "3 / span 2",
  },
});

const Stock = styled.img({
  gridColumn: "3 / span 1",
  gridRow: "3 / span 1",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    display: "none",
  },
});
