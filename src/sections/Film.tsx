import styled from "@emotion/styled";
import React from "react";
import { ImageWithText } from "../components/ImageWithText";
import PlaceholderImage from "../images/withBird.jpg";

export const Film = React.memo(() => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Film & TVC‘s</h1>
      <p>
        In addition to playing music Mitch has years of experience working in
        the art department for film and TV. Together with his van he can assist
        you and your project with all things sets, props and wardrobe.
      </p>
      <Image alt="Mitch" src={PlaceholderImage} />
    </div>
  );
});

const Image = styled.img({
  borderRadius: "8px",
  marginTop: "32px",
  width: "100%",
});
