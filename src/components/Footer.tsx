import React from "react";
import styled from "@emotion/styled";
import { socialLinks } from "../shared/socialLinks";
import BREAKPOINTS from "../shared/breakpoints";
import { Wave4 } from "../svg/Wave4";
import FONTS from "../shared/fonts";
import COLORS from "../shared/colors";

export const Footer = React.memo(() => (
  <FooterContainer>
    <Wave4 color={COLORS.blue} height="100%" width="100%" />
    <Inner background={COLORS.blue}>
      <Row>
        <div>
          <Logo>Mitch Tolnay</Logo>
          {socialLinks.map((link, i) => (
            <IconLink href={link.href} key={i}>
              <Icon className={link.className} />
            </IconLink>
          ))}
        </div>
        <Right>
          <Link href="tel:+61452618823">+61 (0) 452-61 88 23</Link>
          <Link href="mailto:mitchtolnay@gmail.com">mitchtolnay@gmail.com</Link>
        </Right>
      </Row>
      <Line />
      <p
        style={{
          fontSize: "14px",
          margin: "24px auto 0",
          textAlign: "center",
        }}
      >
        Copyright © 2021 Mitch Tolnay
      </p>
    </Inner>
  </FooterContainer>
));

const Line = styled.hr({
  height: "1px",
  color: "white",
  maxWidth: "1120px",
  margin: "0 auto",
});

const Logo = styled.p({
  fontFamily: FONTS.reenie,
  fontSize: "40px",
  fontWeight: 700,
});

const Link = styled.a({
  color: "white",
  fontSize: "16px",
  marginTop: "16px",
  textDecoration: "none",
  display: "block",
});

const FooterContainer = styled.div({
  marginTop: "-50px",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    marginTop: "32px",
  },
});

const Row = styled.div({
  display: "flex",
  justifyContent: "space-between",
  maxWidth: "1120px",
  margin: "0 auto 40px auto",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    flexDirection: "column",
    marginBottom: "80px",
  },
});

const Inner = styled.div<{ background: string }>(({ background }) => ({
  background,
  color: "white",
  padding: "60px 32px 60px",
  marginTop: "-8px",
}));

const Right = styled.div({
  textAlign: "right",

  [`@media (max-width: ${BREAKPOINTS.small}px)`]: {
    textAlign: "left",
  },
});

const IconLink = styled.a({
  textDecoration: "none",
});

const Icon = styled.i({
  fontSize: "22px",
  margin: "12px",
  color: "white",
});
