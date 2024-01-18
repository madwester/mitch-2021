import styled from "@emotion/styled";
import React from "react";
import { Container } from "../App";

export const JefferyDay = React.memo(() => (
  <Container>
    <div style={{ display: "flex" }}>
      <Column>
        <h1>Jeffery day</h1>
      </Column>
    </div>
    <div
      style={{
        maxWidth: "780px",
        margin: "60px auto 0",
        paddingBottom: "128px",
      }}
    >
      <iframe
        src="https://open.spotify.com/embed/artist/6flM4DexqUIDPgHCWvttfl?utm_source=generator&theme=0"
        width="100%"
        height="352"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Jeffery Day"
      />
    </div>
  </Container>
));

const Column = styled.div({
  flex: 1,
  textAlign: "center",
});
