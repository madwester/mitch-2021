import styled from "@emotion/styled";
import React from "react";
import BREAKPOINTS from "../shared/breakpoints";

export const Contact = React.memo(() => (
  <div style={{ textAlign: "center" }}>
    <h1>Get in touch!</h1>
    <div style={{ margin: "0 auto", maxWidth: "720px" }}>
      Need to hire a musician? Mitch has everything you need for the music to be
      taken care of at your event. He would love you to get in touch!
      <Links>
        <Link href="tel:+61452618823">
          <Icon className="fas fa-phone" /> +61 (0) 452-61 88 23
        </Link>
        <Link href="mailto:mitchtolnay@gmail.com">
          <Icon className="fas fa-envelope" /> mitchtolnay@gmail.com
        </Link>
      </Links>
    </div>
  </div>
));

const Icon = styled.i({
  color: "black",
  fontSize: "18px",
  marginRight: "8px",
});

const Links = styled.div({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "24px",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    flexDirection: "column",
  },
});

const Link = styled.a({
  color: "black",
  fontSize: "20px",
  marginTop: "16px",
  textDecoration: "none",
});
