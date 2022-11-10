import { css } from "@emotion/react";
import FONTS from "./shared/fonts";
import BREAKPOINTS from "./shared/breakpoints";
import COLORS from "./shared/colors";

export const globalStyles = css({
  "*": {
    boxSizing: "border-box",
    fontFamily: FONTS.poppins,
    lineHeight: 1.5,
  },

  a: {
    color: COLORS.blue,
    textDecoration: "none",

    "&:hover": {
      textDecoration: "underline",
    },
  },

  "h1, h2, h3, h4, h5, h6, p": {
    lineHeight: 1.5,
    margin: "0 auto",
    padding: "0",
    maxWidth: "780px",
  },

  h1: {
    fontWeight: 700,
    fontSize: "52px",
    marginBottom: "32px",

    [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
      fontSize: "34px",
      marginBottom: "24px",
    },
  },
  h2: {
    fontWeight: 700,
    fontSize: "32px",

    [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
      fontSize: "24px",
    },
  },
  h3: {
    fontWeight: 700,
    fontSize: "24px",

    [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
      fontSize: "20px",
    },
  },
  p: {
    fontSize: "18px",
    lineHeight: 1.5,
  },
});
