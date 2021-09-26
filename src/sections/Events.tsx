import styled from "@emotion/styled";
import React from "react";
import { Gap } from "../components/Gap";
import FONTS from "../shared/fonts";

const Testimonials = [
  {
    name: "Luke Sullivan, Elham Hotel",
    text: "Lorem ipsum dolor, sit amet consectetur consequuntur quia odit ea tempora.",
  },
  {
    name: "Jarrod Pearse, Event coordinator",
    text: "I’ve seen Mitch play a few times now, onstage with a full band, a wedding and going solo midweek down at the local. Aside from his obvious songwriting skills, flexibility and drop dead good looks, he consistently blows me away with his unique talent of being able to read the room, understand the mood and set e scene. Whether it’s a wedding, backyard party or battling against the backdrop of the footy at the pub, he nails it everytime.",
  },
  {
    name: "Ashley Middleton, Bride",
    text: "You made our engagement party an absolute dream. Everyone had so much fun and could not stop talking about how great you were!! We truly can not tell you how in awe of your music and energy we all were and just how bloody thankful we are!! Thank you again so so much you absolute legend!",
  },
];

export const Events = React.memo(() => (
  <div style={{ textAlign: "center" }}>
    <h1>Wedding, party or corporate event?</h1>
    <p>
      You will find him playing gigs solo and with his band at bars, cafes,
      wineries, weddings and parties around Sydney, the Southern Highlands, the
      South Coast, Northern Beaches and Northern Rivers of NSW. He aims to
      inspire people to channel their energy into a creative outlet in order to
      live a happier more creative life. Mitch is following his passion of
      songwriting and performing to live audiences, small and large. He is
      currently working on his debut album from his garage in Bondi.
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
  </div>
));

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
