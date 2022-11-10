import styled from "@emotion/styled";
import React from "react";
import { Container } from "../App";
import BREAKPOINTS from "../shared/breakpoints";
import COLORS from "../shared/colors";

const TestimonialsText = [
  {
    name: "Luke Sullivan, Eltham Hotel",
    text: "Mitch tolnay is a musical force. A talented multi-instrumentalist, his repertoire comes loaded with experience and a mixed set list that seamlessly moulds to suit the crowd. His performances are engaging and always leave the crowds wanting more. He is our go to gig when we are lucky enough to have him in the Northern Rivers. And he loves a beer - 5 stars ;)",
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

export const Testimonials = React.memo(() => (
  <Wrapper>
    <Container>
      <h1>Testimonials</h1>
      {TestimonialsText.map((t, i) => (
        <Testimonial alignLeft={i % 2 === 0}>
          <div>{`" ${t.text} "`}</div>
          <Author>{t.name}</Author>
        </Testimonial>
      ))}
    </Container>
  </Wrapper>
));

const Wrapper = styled.div({
  background: COLORS.beige,
  padding: "128px 0",
  textAlign: "center",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    margin: "0 -32px",
    padding: "96px 32px",
  },
});

const Testimonial = styled.div<{ alignLeft: boolean }>(({ alignLeft }) => ({
  borderLeft: alignLeft ? "3px solid black" : "0",
  borderRight: !alignLeft ? "3px solid black" : "0",
  fontStyle: "italic",
  textAlign: alignLeft ? "left" : "right",
  padding: "0 16px",
  fontSize: "18px",
  maxWidth: "780px",
  margin: "0 auto 40px",
}));

const Author = styled.div({
  marginTop: "16px",
  color: COLORS.blue,
  fontWeight: 700,
});
