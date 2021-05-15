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

  const accessToken =
    "IGQVJVSVRVc2RwaExUaUFqX0lUcTdDNExDLVRjS2NpUzZARajd4NjVDNzhKUEo0THVuZA2pUZAnZAjcDVlTEhGUzlkNmVJazQwekVEb0kwcFk4dU5rQmZAkNGh3Mk5oRUt4OF9PRnBjdnoyZAUR4ZA1I5VWxXeQZDZD";
  const url = `https://graph.instagram.com/me/media?access_token=${accessToken}&fields=media_url,media_type,caption,permalink`;
  const [data, setData] = useState<InstagramData[]>([]);

  useEffect(() => {
    const getFeed = async () => {
      const response = await fetch(url);
      const responseData = await response.json();
      if (response.ok) {
        const eightImages = responseData.data.slice(0, 8);
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
}));

const Icon = styled.i({
  color: "white",
  fontSize: "40px",

  "& path": {
    color: "white",
  }
});

const Overlay = styled.div({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  background: "rgba(0,0,0,0.6)",
  transition: "all .2s",
  opacity: 0,

  "&:hover": {
    opacity: 1,
  }
});
