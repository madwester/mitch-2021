import styled from "@emotion/styled";
import React from "react";

interface Props {
  slug: string;
  text: string;
}

export const Button = React.memo<Props>(({ slug, text }) => (
  <ButtonContainer href={slug}>
    {text} <div>&rarr;</div>
  </ButtonContainer>
));

const ButtonContainer = styled.a({
  background: "#2d4d44",
  border: 0,
  borderRadius: "2px",
  color: "white",
  cursor: "pointer",
  display: "inline",
  flexShrink: 0,
  fontSize: "16px",
  fontWeight: 800,
  letterSpacing: "1.1px",
  padding: "12px",
  textDecoration: "none",
  transition: ".2s opacity linear",

  "& > div": {
    display: "inline-block",
  },
  "&:hover": {
    opacity: ".8",
    "& > div": {
      transform: "rotate(90deg)",
      transition: "transform 0.2s",
    },
  },
});
