import React, { CSSProperties } from "react";

export const Listen = React.memo(() => (
  <div style={{ textAlign: "center" }}>
    <iframe
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      src="https://www.youtube.com/embed/hRuw18AaXV4"
      style={VideoStyles}
      title="Mitch playing"
    />
  </div>
));

const VideoStyles: CSSProperties = {
  borderRadius: "8px",
  margin: "0 auto",
  maxWidth: "1120px",
  width: "100%",
  height: "600px",
};
