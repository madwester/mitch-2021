import React, { useCallback, useEffect, useState } from "react";
import styled from "@emotion/styled";
import FONTS from "../shared/fonts";
import { headerItems } from "../shared/headerItems";
import BREAKPOINTS from "../shared/breakpoints";
import { Menu } from "./Menu";
import { socialLinks } from "../shared/socialLinks";
import scrollIntoView from "smooth-scroll-into-view-if-needed";
import { HEADER_Z_INDEX } from "../shared/constants";

interface Props {
  activeLink: string | undefined;
}

export const Header = React.memo<Props>(({ activeLink }) => {
  const [show, setShow] = useState(false);
  const [headerTop, setHeaderTop] = useState(true);

  const onScroll = useCallback(() => {
    if (document.body.getBoundingClientRect().top > -100) {
      setHeaderTop(true);
    } else {
      setHeaderTop(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const scrollToSection = useCallback(({ id }: { id: string }) => {
    const section = document.getElementById(id);
    if (section) {
      scrollIntoView(section, {
        block: "start",
        scrollMode: "if-needed",
        inline: "nearest",
      })
        .then(() => {})
        .catch(() => {});
    }
  }, []);

  const onMenuLinkItemClick = () => {
    setShow(false);
  };

  return (
    <Wrapper id="header" top={headerTop}>
      <Logo href="/">Mitch Tolnay</Logo>
      <HeaderLinks>
        {headerItems
          .filter((item) => item.slug !== "contact")
          .map((item, i) => (
            <HeaderLink
              active={activeLink === item.slug}
              onClick={() => scrollToSection({ id: item.slug })}
              key={i}
            >
              {item.title}
            </HeaderLink>
          ))}
      </HeaderLinks>
      <SocialLinks>
        {socialLinks.map((link, i) => (
          <IconLink href={link.href} key={i} target="_blank">
            <Icon className={link.className} />
          </IconLink>
        ))}
        <ContactLink
          onClick={() => scrollToSection({ id: "contact" })}
          top={headerTop}
        >
          Get in touch
        </ContactLink>
      </SocialLinks>
      <BurgerMenuButton onClick={() => setShow(!show)}>
        <BurgerLine active={show} className="top" />
        <BurgerLine active={show} className="bottom" />
      </BurgerMenuButton>
      <Menu onLinkClick={onMenuLinkItemClick} show={show} />
    </Wrapper>
  );
});

const Wrapper = styled.div<{ top: boolean }>(({ top }) => ({
  alignItems: "center",
  background: top ? "transparent" : "white",
  boxShadow: top ? "none" : "0 1px 0 0 rgb(25 0 65 / 8%)",
  color: "black",
  display: "flex",
  height: "80px",
  justifyContent: "space-between",
  left: 0,
  padding: "0 32px",
  position: "fixed",
  right: 0,
  top: 0,
  transition: "0.2s all",
  zIndex: 2,
}));

const Logo = styled.a({
  color: "inherit",
  fontFamily: FONTS.reenie,
  fontSize: "40px",
  fontWeight: 700,
  textAlign: "center",
  textDecoration: "none",
  textTransform: "capitalize",
});

const HeaderLink = styled.button<{ active: boolean }>(({ active }) => ({
  background: "0",
  border: "0",
  color: "inherit",
  cursor: "pointer",
  fontSize: "18px",
  margin: "0 32px",
  textDecoration: active ? "underline" : "none",
}));

const ContactLink = styled.a<{ top: boolean }>(({ top }) => ({
  background: top ? "white" : "#5176A1",
  color: top ? "#5176A1" : "white",
  cursor: "pointer",
  fontSize: "14px",
  fontWeight: 400,
  marginLeft: "24px",
  padding: "8px 12px",
  textDecoration: "none",
  textTransform: "uppercase",
  transition: "0.2s all",

  "&:hover": {
    opacity: ".8",
  },
}));

const HeaderLinks = styled.div({
  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    display: "none",
  },
});

const SocialLinks = styled.div({
  alignItems: "center",
  display: "flex",
  justifyContent: "flex-end",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    display: "none",
  },
});

const IconLink = styled.a({
  textDecoration: "none",
});

const Icon = styled.i({
  color: "black",
  fontSize: "18px",
  marginLeft: "16px",
});

const BurgerMenuButton = styled.button({
  display: "none",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: "35px",
    height: "35px",
    background: "transparent",
    border: 0,
    outline: "none",
    zIndex: HEADER_Z_INDEX,
  },
});

const BurgerLine = styled.div<{ active: boolean }>(({ active }) => ({
  background: "black",
  position: "absolute",
  display: "block",
  top: "0",
  left: "0",
  bottom: "0",
  margin: "auto",
  content: "''",
  width: "100%",
  height: "2px",
  transition:
    "transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1), width 250ms cubic-bezier(0.2, 0.6, 0.3, 1)",
  willChange: "transform, width",
  "&.top": {
    transform: !active
      ? "translatey(-5.5px)"
      : "translatex(3.5px) rotate(-135deg)",
  },
  "&.bottom": {
    transform: !active
      ? "translatey(5.5px)"
      : "translatex(3.5px) rotate(135deg)",
  },
}));
