"use client";
import Ads from "@/components/adsComponent/Ads";
import Banner from "@/components/banner/Banner";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import ProgressBar from "@/components/progressbar/ProgressBar";
import SectionFinish from "@/components/sections/finish/SectionFinish";
import SectionHero from "@/components/sections/hero/SectionHero";
import SectionPicture from "@/components/sections/hero/SectionPicture";
import SectionHistoric from "@/components/sections/historic/SectionHistoric";
import SectionHistoricDesktop from "@/components/sections/historic/SectionHistoricDesktop";
import SectionKpi from "@/components/sections/kpis/SectionKpi";
import SectionKpiDesktop from "@/components/sections/kpis/SectionKpiDesktop";
import SectionPortraitDesktopV1 from "@/components/sections/portrait/SectionPortraitDesktopV1";
import SectionPortraits2 from "@/components/sections/portrait/SectionPortraits2";
import SectionPortraits3 from "@/components/sections/portrait/SectionPortraits3";
import SectionPortraitsDesktopV1 from "@/components/sections/portrait/SectionPortraitsDesktopV1";
import { section1, section2 } from "@/components/sections/text/data";
import SectionText from "@/components/sections/text/SectionText";
import SectionTextDesktop from "@/components/sections/text/SectionTextDesktop";
import Cookies from "@/components/templateComponent/Cookies";
import { useWindowSize } from "@/hook/useWindowSize";
import { useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./page.module.scss";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { width } = useWindowSize();
  const { scrollYProgress } = useScroll();
  const yProgress = useTransform(scrollYProgress, (value) => value * 100);

  const scaleY = useSpring(yProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.01,
  });

  useEffect(() => {
    const handleGDPRConsent = () => {
      setIsLoaded(true);
    };
    document.addEventListener("gdprConsentGiven", handleGDPRConsent);
    return () => {
      document.removeEventListener("gdprConsentGiven", handleGDPRConsent);
    };
  }, []);

  return (
    <main className={styles.main}>
      <SectionHero
        src="/assets/images/hero-man.webp"
        alt="hero-man"
        size="square"
        start={isLoaded}
      />
      <Menu>
        <NavBar />
      </Menu>
      <div className={`grid marged ${styles.progress}`}>
        <SectionText data={section1} />
        <SectionTextDesktop data={section1} />

        <ProgressBar
          value={scaleY}
          className={`col-start-1 col-1 ${styles.progressBar}`}
        />
      </div>
      {width < 1024 && (
        <Banner
          color="blue"
          content="Les engagements de Carrefour en faveur du « mieux manger »"
          id="anchor_5"
        />
      )}
      <SectionKpi />
      <SectionKpiDesktop />
      <SectionPortraits2 />

      {width >= 1024 && (
        <>
          <div id="anchor_9">
            <SectionPortraitDesktopV1 index={0} />
          </div>
          <div id="anchor_10">
            <SectionPortraitDesktopV1 index={1} />
          </div>
        </>
      )}

      <SectionPicture
        src="/assets/images/hero-box.webp"
        alt="hero-box"
        size="rectangle"
        marginTop={"10rem"}
      />
      <Ads
        id={
          width < 1024
            ? "div-gpt-ad-1729257024685-0"
            : "div-gpt-ad-1729257135244-0"
        }
        size={width < 1024 ? "banniere_basse_320x50" : "banniere_haute_970x250"}
      />
      <SectionText
        data={section2}
        style={{ paddingBottom: "14rem" }}
        marge="marged"
      />
      <SectionTextDesktop
        isCenter={true}
        data={section2}
        className={styles.text2}
      />
      <SectionPortraits3 />

      {width >= 1024 && (
        <div>
          <SectionPortraitsDesktopV1 />
        </div>
      )}

      <SectionPicture
        src="/assets/images/hero-kid.webp"
        alt="hero-kid"
        size={width < 1024 ? "square" : "rectangle"}
        marginTop={"0"}
      />

      <SectionHistoric />
      <SectionHistoricDesktop />
      <SectionFinish />
      <Banner
        color="green"
        content="Pour votre santé, mangez au moins cinq fruits et légumes par jour."
        id="anchor_"
      />
      <Cookies />
    </main>
  );
}