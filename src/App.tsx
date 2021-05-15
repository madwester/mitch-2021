import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import "@fortawesome/fontawesome-free/js/all";
import "aos/dist/aos.css";
import React, { useMemo, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Instagram } from "./components/Instagram";
import { globalStyles } from "./globalStyles";
import HeroImage from "./images/standing-in-water-1.jpg";
import { Biography } from "./sections/Biography";
import { Contact } from "./sections/Contact";
import { Events } from "./sections/Events";
import { Listen } from "./sections/Listen";
import { useIntersect} from "./hooks/useIntersect";
import BREAKPOINTS from "./shared/breakpoints";

// Todo:
// 1. Add smooth scroll x
// 2. Add footer svg
// 3. Add link hover and active x
// 4. Remove eventlistener
// 5. Favicon x

const App = React.memo(() => {
  const [ref1, setRef1] = useState<HTMLElement | null>(null);
  const [ref2, setRef2] = useState<HTMLElement | null>(null);
  const [ref3, setRef3] = useState<HTMLElement | null>(null);
  const [ref4, setRef4] = useState<HTMLElement | null>(null);

  const targets = useMemo(() => [ref1, ref2, ref3, ref4].filter((r): r is HTMLElement => r !== null), [
    ref1, ref2, ref3, ref4
  ]);

  const currentSection = useIntersect({
    targets,
    threshold: 0.1
  });

  return (
    <Main>
      <Global styles={globalStyles} />
      <Header activeLink={currentSection.current?.id} />
      <Hero />
      <Container>
        <Section id="biography" ref={setRef1}>
          <Biography />
        </Section>
        <Section id="listen" ref={setRef2}>
          <Listen />
        </Section>
        <Section id="events" ref={setRef3}>
          <Events />
        </Section>
        <Section id="contact" ref={setRef4}>
          <Contact />
          <Instagram />
        </Section>
      </Container>
      <Footer />
    </Main>
  );
});

const Main = styled.div({ 
  position: "relative"
});

const Container = styled.div({
  maxWidth: "1120px",
  margin: "0 auto",
});

const Hero = styled.div({
  backgroundImage: `url('${HeroImage}')`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "900px",
});

const Section = styled.div({
  padding: "128px 0 0",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    padding: "72px 32px",
  },
});

export default App;

