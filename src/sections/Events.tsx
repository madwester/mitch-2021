import styled from "@emotion/styled";
import React from "react";
import { Gap } from "../components/Gap";
import FONTS from "../shared/fonts";

const Testimonials = [
  {
    name: "Luke Sullivan, Elham Hotel",
    text:
      "Lorem ipsum dolor, sit amet consectetur consequuntur quia odit ea tempora.",
  },
  {
    name: "Alexandra Forde",
    text:
      "Maiores eos recusandae praesentium corporis officia quibusdam. Ecusandae praesentium corporis officia quibusdam. ",
  },
  {
    name: "Ashley Middleton",
    text:
      "You made my Saturday night an absolute dream. Everyone had so much fun and could not stop talking about how great you were!! We truly can not tell you how in awe of your music and energy we all were and just how bloody thankful we are!!",
  },
];

export const Events = React.memo(() => (
  <Container>
    <h1>Wedding, party or corporate event?</h1>
    <Gap height={32} />
    <p>
      Currently residing by the beach in Bondi. You will find him playing solo
      gigs and with his band at bars, cafes, wineries, weddings and parties
      around Sydney, the Southern Highlands, the South Coast, Northern Beaches
      and Northern Rivers of NSW. He aims to inspire people to channel their
      energy into a creative outlet in order to live a happier more creative
      life.
    </p>
    <Gap />
    <TestimonialRow>
      {Testimonials.map((t, i) => (
        <TestimonialItem key={i}>
          <span>
            <Quote>”</Quote>
            <Text>{t.text}</Text>
          </span>
          <Name>- {t.name}</Name>
        </TestimonialItem>
      ))}
    </TestimonialRow>
  </Container>
));

const Container = styled.div({
  textAlign: "center",
});

const TestimonialRow = styled.div({
  display: "grid",
  gridGap: "48px",
  gridTemplateColumns: "repeat(auto-fit,minmax(256px,1fr))",
  margin: "0 auto",
  maxWidth: "1080px",
});

const TestimonialItem = styled.div({
  backgroundColor: "#f8f7fc",
  borderRadius: "8px",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "space-between",
  padding: "32px",
});

const Quote = styled.span({
  fontFamily: FONTS.covered,
  fontSize: "50px",
  margin: "0 0 16px",
});

const Text = styled.p({
  fontSize: "20px",
  fontWeight: 900,
  lineHeight: "1.5",
  margin: "0 0 16px",
});

const Name = styled.p({
  fontSize: "18px",
  fontWeight: 400,
  lineHeight: "1.5",
  margin: "32px 0 0",
});
