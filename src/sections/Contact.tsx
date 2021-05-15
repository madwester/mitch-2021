import styled from "@emotion/styled";
import React from "react";
import { Gap } from "../components/Gap";
import BREAKPOINTS from "../shared/breakpoints";

export const Contact = React.memo(() => (
  <Container>
    <h1>Get in touch!</h1>
    <Gap height={32} />
    <div style={{ margin: "0 auto", maxWidth: "720px" }}>
      Mitch is currently working on a debut album and following his passion of
      songwriting and performing to live audiences, small and large. And he
      would love you to get in touch!
      <Links>
        <Link href="tel:+61452618823">
          <Icon className="fas fa-phone" /> +61 (0) 452-61 88 23
        </Link>
        <Link href="mailto:mitchtolnay@gmail.com">
          <Icon className="fas fa-envelope" /> mitchtolnay@gmail.com
        </Link>
      </Links>
    </div>
  </Container>
));

const Container = styled.div({
  textAlign: "center",
});

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
