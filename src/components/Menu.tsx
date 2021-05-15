import styled from "@emotion/styled";
import React from "react";
import { MENU_Z_INDEX } from "../shared/constants";
import { headerItems } from "../shared/headerItems";
import { socialLinks } from "../shared/socialLinks";

interface Props {
  show: boolean;
}

export const Menu = React.memo<Props>(({ show }) => (
  <Container show={show}>
    <Links>
      {headerItems.map((item, i) => (
        <Link href={`/#${item.slug}`} key={i}>
          {item.title}
        </Link>
      ))}
    </Links>
    <SocialLinks>
      {socialLinks.map((link, i) => (
        <IconLink href={link.href} key={i}>
          <Icon className={link.className} />
        </IconLink>
      ))}
    </SocialLinks>
  </Container>
));

const Container = styled.div<{ show: boolean }>(({ show }) => ({
  background: "white",
  bottom: "0",
  boxShadow: `0 40px 40px -8px rgba(0,0,0, .16)`,
  display: "flex",
  flexDirection: "column",
  height: "100vh",
  justifyContent: "space-between",
  position: "absolute",
  right: show ? "0" : "-300px",
  top: "0",
  transition: "right 0.6s",
  width: "300px",
  zIndex: MENU_Z_INDEX,
}));

const Links = styled.div({
  padding: "72px 32px 32px",
});

const Link = styled.a({
  color: "inherit",
  display: "block",
  fontSize: "18px",
  margin: "0 0 32px",
  textDecoration: "none",
});

const SocialLinks = styled.div({
  padding: "80px 0",
  textAlign: "center",
});

const IconLink = styled.a({
  textDecoration: "none",

  "&:not(:first-of-type)": {
    marginLeft: "16px",
  },
});

const Icon = styled.i({
  fontSize: "18px",
  color: "black",
});
