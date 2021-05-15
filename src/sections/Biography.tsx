import React from "react";
import { Gap } from "../components/Gap";
import { ImageWithText } from "../components/ImageWithText";
import Image2 from "../images/dark1.jpg";
import Image1 from "../images/wedding1.png";

export const Biography = React.memo(() => (
  <>
    <ImageWithText
      heading="Lorem Ipsum is simply dummy text of the printing and"
      imageSrc={Image1}
      subheading="Mitch Tolnay performs vocals and guitar on folk/ reggae/ relaxed blues style covers and originals. 
      Born and raised in Mittagong (Koori word for “little mountain”) he learnt piano and guitar from a young age. He was inspired in his early childhood by what he describes as a  “melting pot of successful Australian musicians” that inhabited his area."
    />
    <Gap />
    <ImageWithText
      heading="Lorem Ipsum is simply dummy text of the printing and"
      imageSrc={Image2}
      subheading="After travelling the globe for most of his twenties he returned home feeling a little lost and unsure of what to do with this life in this world. A chance encounter with an elder gave him the realisation he needed to face his fear of singing and performing. 
      He decided to develop his craft while living as a busking musician hitchhiking around New Zealand drawing inspiration from travel, nature, the bush, ocean and life experiences we all share on this beautiful, yet extremely bizarre journey we call life. "
      reversed
    />
  </>
));


