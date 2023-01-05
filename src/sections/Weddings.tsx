import styled from "@emotion/styled";
import React from "react";
import BREAKPOINTS from "../shared/breakpoints";
import COLORS from "../shared/colors";

export const Weddings = React.memo(() => (
  <div style={{ textAlign: "center" }}>
    <h1>Weddings</h1>
    <p>
      Planning your special day? Music is such an integral part of a wedding and
      Mitch has everything you need to take care of the music for your entire
      event. From a gentle acoustic number as the bride walks down the aisle to
      the dancefloor bangers we all know and love.
    </p>
    <Grid>
      <div>
        <Icon className="far fa-heart"></Icon>
        <Heading>Ceremony</Heading>
        Mitch can tailor the perfect ceremony package for you. He can learn your
        favourite songs or push play on the original!
      </div>
      <div>
        <Icon className="fas fa-cocktail"></Icon>
        <Heading>Canapes & cocktail</Heading>A pivotal part of your wedding.
        Ceremony is done and dusted and the crew are starting to mingle. The
        first drinks are sliding down. Mitch will provide the perfect atmosphere
        for your loved ones as they settle in!
      </div>
      <div>
        <Icon className="fas fa-wine-glass-alt"></Icon>
        <Heading>Reception</Heading>
        From bridal party entrances to cake cutting and first dance. everything
        is taken care of to ensure smooth sailing of your reception.
      </div>
      <div>
        <Icon className="fas fa-headphones"></Icon>
        <Heading>DJ & Dance floor</Heading>
        Its party time. The time of the evening everyone has been waiting for.
        Grab your partner and jump on the dancefloor. Here Mitch transitions
        into DJ for the rest of the evening playing all your favourite bangers
        from the 60's through to today.
      </div>
    </Grid>
  </div>
));

const Icon = styled.i({
  color: "black",
  fontSize: "32px",
  marginBottom: "16px",
});

const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(4,1fr)",
  gridGap: "32px",
  marginTop: "48px",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    gridTemplateColumns: "repeat(2,1fr)",
  },
  [`@media (max-width: ${BREAKPOINTS.medium}px)`]: {
    gridTemplateColumns: "repeat(1,1fr)",
  },
});

const Heading = styled.h4({
  textTransform: "uppercase",
  marginBottom: "8px",
  fontSize: "20px",
  color: COLORS.blue,
  fontWeight: 700,
});
