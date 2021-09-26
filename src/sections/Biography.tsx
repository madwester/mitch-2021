import React from "react";
import { ImageWithText } from "../components/ImageWithText";
import Image2 from "../images/dark1.jpg";
import Image1 from "../images/wedding1.png";

export const Biography = React.memo(() => (
  <>
    <ImageWithText
      heading="Biography"
      imageSrc={Image1}
      subheading="Mitch Tolnay performs vocals and guitar on folk/ reggae/ relaxed blues style covers and originals. Born and raised in Mittagong (Koori word for “little mountain”) he learnt piano and guitar from a young age. He was inspired in his early childhood by what he describes as a “melting pot of successful Australian musicians” that inhabited his area."
    />
    <ImageWithText
      imageSrc={Image2}
      subheading="After spending his twenties travelling the globe, he returned home feeling a little lost and unsure of what to do with his life in this world. A chance encounter with an elder gave him the realisation he needed to face his fear of singing and performing. He decided to develop his craft while living as a busking musician hitchhiking around New Zealand drawing inspiration from travel, nature, the bush, ocean and life experiences we all share on this beautiful, yet extremely bizarre journey we call life."
      reversed
    />
  </>
));
