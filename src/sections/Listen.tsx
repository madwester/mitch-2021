import React, { CSSProperties } from "react";

export const Listen = React.memo(() => (
  <div style={{ textAlign: "center" }}>
    <h1>Listen</h1>
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      src="https://www.youtube.com/embed/hRuw18AaXV4"
      style={VideoStyles}
      title="Mitch playing"
    />
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "48px" }}
    >
      <iframe
        allow="autoplay"
        height="300"
        scrolling="no"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/392283183&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        style={{
          border: 0,
          borderRadius: "16px",
          maxWidth: 720,
          margin: "0 auto",
        }}
        title="Perfect company"
        width="100%"
      />
    </div>
  </div>
));

const VideoStyles: CSSProperties = {
  borderRadius: "8px",
  margin: "0 auto",
  maxWidth: "1120px",
  width: "100%",
  height: "600px",
};
