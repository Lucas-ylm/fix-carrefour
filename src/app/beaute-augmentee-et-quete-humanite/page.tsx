"use client";
import { useWindowSize } from "@/components/hook/useWindowSize";
import { AnimatedText } from "@/components/loreal/AnimatedText";
import Carousel from "@/components/loreal/Carousel";
import { CoreText } from "@/components/loreal/CoreText";
import { CoreTextChapo } from "@/components/loreal/CoreTextChapo";
import { CoreTitle } from "@/components/loreal/CoreTitle";
import { Quote } from "@/components/loreal/Quote";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import SectionArticleHero from "@/components/sections/SectionArticleHero";
import SectionVignettes from "@/components/sections/SectionVignettes";
import Cookies from "@/components/templateComponent/Cookies";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function BeautyTech() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const { width } = useWindowSize();

  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isDragging] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const scrollPosition = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= documentHeight) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollPosition.current;
    }
  }, [isAtBottom]);

  return (
    <>
      <SectionArticleHero
        subTitle="La beauté de demain"
        mainTitle={
          <span>
            <span className="font-extrabold italic">Beauté augmentée</span> <br /> et quête d’humanité
          </span>
        }
        plane1="/assets/images/beauty-tech/hero-round.png"
        plane2="/assets/images/beauty-tech/hero-shadow.png"
        plane3="/assets/images/beauty-tech/hero.png"
        plane1ClassName="bottom-0 w-full xs:w-[70%] md:h-[50vmax] lg:h-auto lg:right-[2%] lg:bottom-[-3%] lg:w-[43%]"
        plane2ClassName="bottom-0 w-full xs:w-[70%] md:h-[60vmax] lg:h-auto lg:right-[3%] lg:bottom-0 lg:w-[37%]"
        plane3ClassName="bottom-0 w-full xs:w-[70%] md:h-[60vmax] lg:h-auto lg:right-[0%] lg:bottom-0 lg:w-[37%]"
        backgroundClass="gradient-white"
      />
      
      <Menu>
        <NavBar />
      </Menu>

      <section className="marged my-[40px] grid space-y-10 lg:my-[115px]">
        <div className="base:col-start-1 base:col-end-12 lg:col-start-3 lg:col-end-11 lg:py-20">
          <CoreTextChapo elementClassName="lg:text-[18px]">
            <i>«&nbsp;Si, pour définir notre espèce, nous nous en tenions strictement à ce que l’histoire et la préhistoire nous présentent comme la caractéristique constante de l’homme et de l’intelligence, nous ne dirions peut-être pas Homo sapiens, mais Homo faber&nbsp;».</i> L’idée exprimée ici par Bergson traverse toute la philosophie, d’Appius Claudius Caecus à Hannah Arendt. Elle postule que l’homme est un homo faber, défini par sa propension à fabriquer des outils, qui lui permettent de prendre en main sa destinée. Cette idée puissante traverse toute l’histoire de la beauté. Aujourd’hui, avec l’émergence des technologies numériques, homo faber dispose de nouveaux outils. 
          </CoreTextChapo>
          <AnimatedText className="my-[40px] lg:my-40">
            De l’intelligence artificielle aux biotechs, en passant par les jumeaux numériques, l’âge du silicium ouvre de nouvelles perspectives dans la quête universelle de beauté.
          </AnimatedText>
          <CoreText>
            Nous avons échangé avec Béatrice Dautzenberg, directrice des services Beauty Tech chez L’Oréal Groupe, et Guive Balooch, directeur Beauté Augmentée et Open Innovation chez L’Oréal Groupe, pour essayer de comprendre comment beauté et technologie peuvent rimer avec humanité.
          </CoreText>
        </div>
      </section>

      <section className="marged my-[40px] grid lg:my-32">
        <Quote
          direction="left"
          elementClassName="base:col-start-1 base:col-end-13 pl-[12vw] lg:pl-[unset] justify-self-center lg:col-start-2 lg:col-end-6"
          pictureSrc="/assets/images/beauty-tech/guive-quote.png"
          author="Guive Balooch"
          about={`Directeur Beauté Augmentée et Open Innovation chez L’Oréal Groupe`}
        >
          «&nbsp;On ne part pas de la tech, mais des besoins. Or, la connaissance précise de ces besoins est une chose infiniment complexe, qui demande de prendre en compte les géographies, les questions de genre, les cultures.&nbsp;»
        </Quote>
        <div className="space-y-[40px] mt-[15px] lg:mt-[unset] base:col-start-1 base:col-end-12 lg:col-start-7 lg:col-end-12 lg:space-y-20">
          <CoreTitle>Les rituels de beauté et leurs artefacts</CoreTitle>
          <CoreText>
            Lorsqu’on interroge Guive Balooch sur sa vision du futur de la beauté, il répond que <i>«&nbsp;nos mains ne seront plus une barrière pour réaliser nos désirs&nbsp;»</i>, que <i>«&nbsp;les limites de notre compétence et de notre agilité individuelle ne seront plus un frein, parce que nous disposerons des outils nous permettant d’obtenir n’importe quel résultat&nbsp;»</i>. Avec cette réponse, il s’inscrit dans une histoire de la beauté jalonnée d’objets, d’inventions, et de progrès techniques. L’idée d’une beauté <i>«&nbsp;augmentée&nbsp;»</i> est en effet aussi ancienne que notre capacité à fabriquer des outils ou des vêtements. Elle s’incarne tout au long de l’histoire dans les objets les plus simples, comme dans les rituels les plus élaborés. 
          </CoreText>
          <CoreText>
            Un échantillon de cette histoire est actuellement présenté au Louvre, qui propose un programme de médiation inédit dans les salles du musée grâce au soutien exceptionnel de L’Oréal Groupe. Intitulé <i>«&nbsp;De toutes beautés&nbsp;!&nbsp;»</i>, il expose une extraordinaire cuillère à fard égyptienne, vieille de plus de trois millénaires. On y croise un peigne liturgique médiéval, une brosse à toilette du XVIIIe siècle, un flacon de cristal, une boule à savon, et même le miroir de Marie-Antoinette. Chacun de ses objets vient témoigner d’un rapport à la beauté propre à une époque ou à une géographie, tout en illustrant une volonté séculaire de repousser les limites du cadre de la beauté.
          </CoreText>
        </div>
      </section>      
      
      <section className="marged relative my-[40px] grid lg:mb-[50px]">
        <Carousel
          images={[
            { src: "/assets/images/carousel/StephaneMarechalle.jpg", alt: "Image 1", credit: "Peigne liturgique du IXe siècle - © 2020 GrandPalaisRmn (musée du Louvre) Stéphane Maréchalle" },
            { src: "/assets/images/carousel/ivoire.jpg", alt: "Image 1", credit: "Cuiller à fard à la nageuse AEC, Anonyme, Egypte, bois et ivoire." },
            { src: "/assets/images/carousel/ThierryOlivier.jpg", alt: "Image 2", credit: "Hermaphrodite © 2011 Musée du Louvre, Dist. GrandPalaisRMN - Thierry Olivier" },
            { src: "/assets/images/carousel/ChristianDecamps.jpg", alt: "Image 3", credit: "Néfertiabet © 2013 Musée du Louvre, Dist. GrandPalaisRMN - Christian Décamps" },
            { src: "/assets/images/carousel/FranckRaux.jpg", alt: "Image 4", credit: "Princesse d’Este © 2016 GrandPalaisRMN (musée du Louvre) - Franck Raux" },
            { src: "/assets/images/carousel/SylvieChanLiat.jpg", alt: "Image 5", credit: "Table de toilette © 2021 GrandPalaisRMN (musée du Louvre) - Sylvie Chan-Liat" },
          ]}
        />
        <CoreText 
          className="base:col-start-5 text-end base:col-end-13 lg:col-start-10 lg:col-end-13 xl:col-start-10 xl:col-end-13 pt-[20px]"
          elementClassName="text-[14px] text-end lg:!text-[16px] !font-light !font-roboto"
        >
          Aperçu des oeuvres du parcours «&nbsp;De&nbsp;toutes&nbsp;beautés&nbsp;!&nbsp;»
        </CoreText>
      </section>

      <section className="marged my-20 grid lg:my-48">
        <div className="centered-content space-y-10 base:col-start-1 base:col-end-12 lg:space-y-20">
          <CoreTitle>Beauty Tech, pour une beauté toujours plus personnalisée</CoreTitle>
          <CoreText>
            Aujourd’hui, avec l’entrée dans une ère numérique, l’humanité a passé un nouveau seuil technologique. La naissance de celui que l’anthropologue Élisabeth Azoulay désigne comme Homo faber 2.0 dans le dernier tome de <span className="font-bold italic">100 000 ans de beauté (Gallimard, 2024)</span>, soutenu par le Groupe L’Oréal, s’accompagne de nouveaux outils qui n’ont pas épargné le secteur de la beauté. <i>«&nbsp;Pour le Groupe L’Oréal, l’idée de Beauty Tech est née en 2010, dans le sillage du e-commerce et des réseaux sociaux. Elle a pris une nouvelle ampleur en 2018 avec le lancement du programme Beauty Tech, dont l’ambition est de mettre la technologie au service d’une beauté plus personnalisée, plus inclusive et plus durable&nbsp;»</i>, explique Béatrice Dautzenberg. Elle s’incarne dans une série d’innovations emblématiques, toutes destinées à «&nbsp;augmenter&nbsp;» l’expérience, la créativité ou les performances beauté pour celui ou celle qui les utilise. La technologie Colorsonic de L’Oréal Paris, qui a demandé près de dix années de recherche et développement, permet d’appliquer une couleur d’un simple geste, sans manipulation complexe. Beauty Genius de L’Oréal Paris, véritable assistant personnel de beauté, propose quant à lui d’échanger avec une IA sur toutes les questions de beauté les plus intimes, de réaliser des diagnostics, ou de recevoir des recommandations personnalisées.
          </CoreText>
        </div>
        <AnimatedText className="my-10 base:col-start-1 base:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10 lg:my-[40px]">
          «&nbsp;Avec l’aide de l’IA, nous menons des études cliniques qui nous permettent de passer d’un diagnostic réactif à des recommandations prédictives.&nbsp;»
        </AnimatedText>
        <div className="centered-content base:col-start-1 base:col-end-12 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          <CoreText>
            <i>«&nbsp;Historiquement, on parlait de beauté pour tous, on parle désormais de beauté pour chacun et chacune&nbsp;»</i>, précise Béatrice Dautzenberg. Demain, cette individualisation du rapport à la beauté devrait se poursuivre autour de l’utilisation des données environnementales ou cliniques. À travers son partenariat avec Google Maps Platform, une référence dans l’information sur la qualité de l’air et de l’environnement comme l’indice UV, le Groupe L’Oréal développe ainsi une plateforme d’exposome, qui va permettre d’adapter les recommandations au contexte environnemental précis des consommateurs. <i>«&nbsp;Nous observons également les biomarqueurs qui nous permettent de comprendre ce qui se passe sous la peau. Avec l’aide de l’IA, nous menons des études cliniques qui nous permettent de passer d’un diagnostic réactif à des recommandations prédictives&nbsp;»</i>, ajoute Guive Balooch. 
          </CoreText>
        </div>
      </section>

      <section className="marged relative mb-[30px] grid lg:mb-[50px]">
        <Carousel
          images={[
            { src: "/assets/images/carousel/maison-min.jpg", alt: "Image 1", credit: "Colorsonic, outil intelligent de coloration à la maison" },
            { src: "/assets/images/carousel/monde.jpg", alt: "Image 2", credit: "HAPTA, Le premier applicateur de maquillage informatisé portable au monde" },
            { src: "/assets/images/carousel/beaute.jpg", alt: "Image 3", credit: "L’Oréal, Beauty Genius, application utilisant l’IA pour délivrer des conseils beauté" },
            { src: "/assets/images/carousel/soignes.jpg", alt: "Image 4", credit: "Steampod, lisseur à vapeur pour des cheveux lissés et soignés" },
            { src: "/assets/images/carousel/shampoing.jpg", alt: "Image 5", credit: "Water Saver, la douchette professionnelle réduisant de l'utilisation d'eau à chaque shampoing" },
          ]}
        />
        <CoreText 
          className="base:col-start-5 text-end base:col-end-13 lg:col-start-10 lg:col-end-13 xl:col-start-10 xl:col-end-13 pt-[20px]"
          elementClassName="text-[14px] text-end lg:!text-[16px] !font-light !font-roboto"
        >
          Les dernières innovations présentées par L'Oréal&nbsp;Groupe
        </CoreText>
      </section>

      <section className="marged space-y-[40px] lg:space-y-[unset] my-10 grid lg:mt-[150px] lg:mb-[65px]">
        <div className="space-y-10 base:col-start-1 base:col-end-12 lg:col-start-2 lg:col-end-7 lg:space-y-20">
          <CoreTitle>Augmenter notre humanité </CoreTitle>
          <CoreText className="mt-10 base:col-start-1 base:col-end-13 lg:col-start-2 lg:col-end-7">
            Derrière l’ensemble de ces projets, la philosophie du Groupe L’Oréal est de proposer une technologie plus humaniste, capable d’améliorer la vie des utilisateurs. <i>«&nbsp;On ne part pas de la tech, mais des besoins. Or, la connaissance précise de ces besoins est une chose infiniment complexe, qui demande de prendre en compte les géographies, les questions de genre, les cultures&nbsp;»</i>, explique Guive Balooch. La technologie HAPTA, développée pour Lancôme, incarne cet engagement sociétal en proposant un applicateur de maquillage auto-stabilisé destiné aux personnes vivant avec une dextérité limitée. Au-delà de l’inclusivité, la dimension éthique associée à l’usage des nouveaux outils est également fondamentale. <i>«&nbsp;Dès 2021, le Groupe L’Oréal a créé un cadre plus responsable pour une intelligence artificielle de plus grande confiance qui s’appuie sur nos valeurs éthiques. Le premier principe est la supervision humaine, on parle également de fiabilité, de sécurité, de durabilité, de transparence ou d’explicabilité pour éviter la création de boîtes noires&nbsp;»</i>, détaille Béatrice Dautzenberg. De manière plus générale,  le Groupe L’Oréal poursuit la quête d’une technologie capable d’ouvrir les horizons, d’élargir le terrain de jeu et de faire tomber les barrières, en particulier créatives. Cette ambition s’incarne par exemple dans CreAITech, véritable laboratoire dédié à l’expérimentation autour de l’IA générative, et espace sécurisé destiné à repousser les frontières de la créativité des équipes L’Oréal. <i>«&nbsp;Nous pouvons imaginer des expériences qui se trouvent à la frontière de l’art et de la beauté, c’est une manière d’aider les personnes à tendre vers leur idéal&nbsp;»</i>, conclut Béatrice Dautzenberg.
          </CoreText>
        </div>
        <Quote
          direction="left"
          elementClassName="grid-row-1 hidden lg:block lg:col-start-9 lg:col-end-13"
          pictureSrc="/assets/images/beauty-tech/beatrice-quote.png"
          author="Béatrice Dautzenberg"
          about={`Directrice des services Beauty Tech chez L’Oréal Groupe`}
        >
          «&nbsp;Historiquement, on parlait de beauté pour tous, on parle désormais de beauté pour chacun et chacune.&nbsp;»
        </Quote>
        <Quote
          direction="left"
          elementClassName="block lg:hidden base:col-start-1 base:col-end-13 pl-[12vw] lg:pl-[unset] justify-self-center"
          pictureSrc="/assets/images/beauty-tech/beatrice-quote.png"
          author="Béatrice Dautzenberg"
          about={`Directrice des services Beauty Tech chez L’Oréal Groupe`}
        >
          «&nbsp;Historiquement, on parlait de beauté pour tous, on parle désormais de beauté pour chacun et chacune.&nbsp;»
        </Quote>
      </section>

      <section className="marged mb-[75px] grid">
        <div className="lg:col-start-1 lg:col-end-13 space-y-12 lg:space-y-[40px]">
          <p className=" bg-[#E8E7E3] rounded-[3px] text-center lg:text-start px-[20px] py-[10px] flex tracking-wider justify-center uppercase underline w-full font-roboto text-[10px]">
            <a href="https://www.loreal.com/fr/articles/group/semaine-de-lindustrie/" target="_blank">Pour plus d’informations sur l’ancrage industriel de L’Oréal en France : https://www.loreal.com/fr/articles/group/semaine-de-lindustrie/</a></p>
        </div>
      </section>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        slug="beaute-augmentee-et-quete-humanite"
        sortFunction={[7, 6, 5, 3, 4, 1, 2]}
      />

      <Cookies />
    </>
  );
}
