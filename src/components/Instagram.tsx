import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { instagramLink } from "../shared/socialLinks";

export const Instagram = React.memo(() => {
  interface InstagramData {
    caption: string;
    id: string;
    media_type: string;
    media_url: string;
    permalink: string;
  }

  const token =
    "EAAMamZAsHyjMBAG9btZCKZBFz8hkd1WjLJjSZADZB6ZBDLWy1PJ7TIom1hihitZCZB9C2pzrogVuKriOvLZAy4ZAxhamdH3CCPvN9I1RKXbPNu9wjoU41HEk1m9ZCtpDXzEnZC1y11Mg53BfZBgtug5BRwNysdGc09CeE8ZBnCfEFQP7BxZBwI2btw9GvZBEKsWPVVdLtbPBzYNdAH4zHWOsSiflP9DL66RO1varmaFVulgvPWZAeh8zZAyyXFfQax";
  const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=media_url,media_type,caption,permalink`;

  const [data, setData] = useState<InstagramData[]>([]);

  useEffect(() => {
    const getFeed = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      if (response.ok) {
        console.log("responseData.data",responseData.data);
        const eightImages = responseData.data.filter((i: InstagramData) => i.media_type !== "VIDEO").slice(0, 8);
        setData(eightImages);
      } else {
        console.log("error");
      }
    };
    getFeed();
  }, [url]);

  if (data.length === 0) {
    return null;
  }

  return (
    <InstagramContainer>
      <h3>
        Follow me on instagram{" "}
        <Link href={instagramLink}>@mitchinthemountains</Link>
      </h3>
      <Grid>
        {data.map((item) => (
          <Image href={item.permalink} imageSrc={item.media_url} key={item.id}>
            <Overlay>
              <Icon className="fab fa-instagram" />
            </Overlay>
          </Image>
        ))}
      </Grid>
    </InstagramContainer>
  );
});

const InstagramContainer = styled.div({
  marginTop: "128px",
  textAlign: "center",
});

const Link = styled.a({
  color: "inherit",
  textDecoration: "none",

  "&:hover": {
    textDecoration: "underline",
  },
});

const Grid = styled.div({
  display: "grid",
  gridGap: "48px",
  gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
  marginTop: "32px",
});

const Image = styled.a<{ imageSrc: string }>(({ imageSrc }) => ({
  backgroundImage: `url(${imageSrc})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "240px",
  backgroundPosition: "center",
  position: "relative",
  cursor: "pointer",
  borderRadius: "8px",
}));

const Icon = styled.i({
  color: "white",
  fontSize: "40px",

  "& path": {
    color: "white",
  },
});

const Overlay = styled.div({
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  right: 0,
  left: 0,
  transition: "all .2s",
  opacity: 0,
  background: "rgba(0,0,0,0.6)",
  borderRadius: "8px",
  bottom: 0,
  display: "flex",

  "&:hover": {
    opacity: 1,
  },
});
