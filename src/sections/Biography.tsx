import styled from "@emotion/styled";
import React from "react";
import { Collage } from "../components/Collage";
import COLORS from "../shared/colors";

export const Biography = React.memo(() => (
  <>
    <BiographyText>
      Mitch Tolnay performs vocals and guitar on folk/ reggae/ relaxed blues
      style covers and originals. Born and raised in Mittagong (Koori word for
      “little mountain”) he learnt piano and guitar from a young age. He was
      inspired in his early childhood by what he describes as a “melting pot of
      successful Australian musicians” that inhabited his area.
      <br />
      <br />
      After spending his twenties travelling the globe, he returned home feeling
      a little lost and unsure of what to do with his life in this world. A
      chance encounter with an elder gave him the realisation he needed to face
      his fear of singing and performing. He decided to develop his craft while
      living as a busking musician hitchhiking around New Zealand drawing
      inspiration from travel, nature, the bush, ocean and life experiences we
      all share on this beautiful, yet extremely bizarre journey we call life.
      <br />
      <br />
      You will find him playing gigs solo and with his band at bars, cafes,
      wineries, weddings and parties around Sydney, the Southern Highlands, the
      South Coast, Northern Beaches and Northern Rivers of NSW. He aims to
      inspire people to channel their energy into a creative outlet in order to
      live a happier more creative life. Mitch is following his passion of
      songwriting and performing to live audiences, small and large. He is
      currently working on his debut album from his garage in Bondi.
    </BiographyText>
    <Collage />
  </>
));

const BiographyText = styled.p({
  display: "block",

  "&::first-letter": {
    color: COLORS.blue,
    fontSize: "90px",
    lineHeight: "80px",
    initialLetter: 3,
    float: "left",
    marginRight: "8px",
  },
});
