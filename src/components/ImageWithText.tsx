import styled from "@emotion/styled";
import React from "react";
import BREAKPOINTS from "../shared/breakpoints";
import { Gap } from "./Gap";

interface Props {
  heading?: string;
  imageSrc: string;
  reversed?: boolean;
  subheading: string;
}

export const ImageWithText = React.memo<Props>(
  ({ heading, reversed = false, subheading, imageSrc }) => (
    <Row reverse={reversed}>
      <ItemImage image={imageSrc} />
      <ItemContent reverse={reversed}>
        {heading == null ? null : <h2>{heading}</h2>}
        <p>{subheading}</p>
        <Gap height={32} />
      </ItemContent>
    </Row>
  )
);

const Row = styled.div<{ reverse: boolean }>(({ reverse }) => ({
  display: "flex",
  flexDirection: reverse ? "row-reverse" : "row",
  height: "600px",
  margin: "0 auto",
  textAlign: "left",
  width: "100%",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    flexDirection: "column-reverse",
    height: "auto",
  },
}));

const ItemImage = styled.div<{ image: string }>(({ image }) => ({
  backgroundImage: `url('${image}')`,
  backgroundPosition: "unset",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "8px",
  height: "100%",
  width: "50%",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    height: "400px",
    width: "100%",
  },
}));

const ItemContent = styled.div<{ reverse: boolean }>(({ reverse }) => ({
  margin: reverse ? "0 32px 0 0" : "0 0 0 32px",
  width: "50%",

  "& h2": {
    marginBottom: "24px",
  },

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    margin: "0",
    width: "100%",
  },
}));
