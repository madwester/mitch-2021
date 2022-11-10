import { Global } from "@emotion/react";
import styled from "@emotion/styled";
import "@fortawesome/fontawesome-free/js/all";
import "aos/dist/aos.css";
import React, { useMemo, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { globalStyles } from "./globalStyles";
import { useIntersect } from "./hooks/useIntersect";
import HeroImage from "./images/standing-in-water-1.jpg";
import { Biography } from "./sections/Biography";
import { Contact } from "./sections/Contact";
import { Listen } from "./sections/Listen";
import { Testimonials } from "./sections/Testimonials";
import { Weddings } from "./sections/Weddings";
import BREAKPOINTS from "./shared/breakpoints";

const App = React.memo(() => {
  const [ref1, setRef1] = useState<HTMLElement | null>(null);
  const [ref2, setRef2] = useState<HTMLElement | null>(null);
  const [ref3, setRef3] = useState<HTMLElement | null>(null);
  const [ref4, setRef4] = useState<HTMLElement | null>(null);
  const [ref5, setRef5] = useState<HTMLElement | null>(null);

  const targets = useMemo(
    () =>
      [ref1, ref2, ref3, ref4, ref5].filter(
        (r): r is HTMLElement => r !== null
      ),
    [ref1, ref2, ref3, ref4, ref5]
  );

  const currentSection = useIntersect({
    targets,
    threshold: 0.1,
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
        <Section id="weddings" ref={setRef3}>
          <Weddings />
        </Section>
        <Section id="listen" ref={setRef2}>
          <Listen />
        </Section>
      </Container>
      <Section id="testimonials" ref={setRef4}>
        <Testimonials />
      </Section>
      <Container>
        <Section id="contact" ref={setRef5}>
          <Contact />
        </Section>
      </Container>
      <Footer />
    </Main>
  );
});

const Main = styled.div({
  position: "relative",
});

export const Container = styled.div({
  maxWidth: "1120px",
  margin: "0 auto",
});

const Hero = styled.div({
  backgroundImage: `url('${HeroImage}')`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100vh",
});

const Section = styled.div({
  padding: "128px 0 0",

  [`@media (max-width: ${BREAKPOINTS.large}px)`]: {
    padding: "96px 32px 0",
  },
});

export default App;
