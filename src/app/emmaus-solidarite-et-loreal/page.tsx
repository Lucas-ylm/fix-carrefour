"use client";
import AnimatedContainer from "@/components/animation/AnimatedContainer";
import { Count } from "@/components/animation/Count";
import Parallax from "@/components/animation/Parallax";
import { TransitionContext } from "@/components/context/TransitionContext";
import { useWindowSize } from "@/components/hook/useWindowSize";
import { AnimatedText } from "@/components/loreal/AnimatedText";
import { Block } from "@/components/loreal/Block";
import CardText from "@/components/loreal/CardText";
import Carousel from "@/components/loreal/Carousel";
import { CoreText } from "@/components/loreal/CoreText";
import { CoreTextITW } from "@/components/loreal/CoreTextITW";
import { CoreTitle } from "@/components/loreal/CoreTitle";
import { Quote } from "@/components/loreal/Quote";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import SectionArticleHero from "@/components/sections/SectionArticleHero";
import SectionVignettes from "@/components/sections/SectionVignettes";
import Cookies from "@/components/templateComponent/Cookies";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { useGSAP } from "@gsap/react";
import { useScroll } from "framer-motion";
import { Fragment, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Article3() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });  
  
  const { timeline } = useContext(TransitionContext);
  const image = useRef();

  useLayoutEffect(() => {
    if (!container.current) return;
  
    const targets = gsap.utils.toArray(["p", image.current]);
    gsap.fromTo(
      targets,
      { x: -30, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.25 }
    );
  
    timeline.add(gsap.to(container.current, { opacity: 0, duration: 0.5 }));
  }, [container.current]);

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
    <div ref={container}>
      <div ref={image}>
        <SectionArticleHero
          subTitle="Les forces de la beauté"
          mainTitle={
            <span>
              EMMAÜS {width < 768 && <br />} Solidarité {width > 768 && <br />} et L'Oréal : {width < 768 && <br />}
              quand
              {width > 768 && <br />} la beauté {width < 768 && <br />}
              <span className="font-extrabold italic">nous&nbsp;relie</span>
            </span>
          }
          plane1="/assets/images/hero/emmaus-round.png"
          plane2="/assets/images/hero/emmaus-shadow.png"
          plane3="/assets/images/hero/emmaus.png"
          backgroundClass="noise-bg-article-3"
        />
      </div>
      
      <Menu>
        <NavBar />
      </Menu>

      <section className="marged grid py-[40px] lg:py-[60px]">
        <div className="grid self-center h-fit base:col-start-1 base:col-end-12 lg:col-start-1 xl:col-start-2 lg:col-end-7 space-y-[40px] lg:space-y-[20px]">
          <AnimatedText className="pt-[20px]">
            La lumière du matin filtre
            à travers les arbres qui longent
            le canal Saint-Martin, à Paris.
          </AnimatedText>
          <CoreTextITW
            elementClassName="lg:text-[18px]"
            className="text-black lg:col-start-2">
              Elle projette des ombres sur la devanture soignée d’un salon de beauté. À l’intérieur, l’alignement des produits et les sourires du personnel pourraient appartenir à n’importe quel établissement bien tenu de ce type. C’est ici que nous avons rendez-vous avec Lotfi Ouanezar, directeur général d’EMMAÜS Solidarité, et Pauline Ngomé, ancienne représentante des personnes accueillies par EMMAÜS Solidarité, elle-même logée dans une pension de famille parisienne. Au cours d’un entretien mené à bâtons rompus, nous allons découvrir un espace plus singulier que ne le laisse présager sa vitrine. Nous sommes en effet dans un des quatre espaces beauté et bien-être ouverts par EMMAÜS Solidarité, en partenariat avec L’Oréal France et la Fondation L’Oréal. C’est ici que les deux organisations mettent en pratique les principes de la socio-esthétique, une discipline qui illustre au quotidien la force de la beauté au service de l’estime de soi et de l’inclusion.
          </CoreTextITW>
        </div>
        <ExportedPicture
          className="mt-[20px] base:col-start-1 base:col-end-13 lg:col-start-8 lg:col-end-13 xl:col-end-12"
          alt="Biologie"
          src="/assets/images/article3/image-article3.webp"
          priority={true}
          credit="©Boby"
        />
      </section>

      <section className="marged relative grid overflow-hidden pb-[40px] lg:py-[50px]">
        <div className="base:col-start-1 base:col-end-13 pl-[12vw] lg:pl-[unset] justify-self-center lg:justify-self-start lg:col-start-2 lg:col-end-5">
          <Quote
            direction="left"
            author="Pauline Ngomé"
            about={`Ancienne représentante des personnes accueillies par EMMAÜS Solidarité `}
            pictureSrc="/assets/images/article3/portrait2-article3.png"
          >
            «&nbsp;La beauté apporte une confiance et une sérénité.&nbsp;»
          </Quote>
        </div>
        <div className="grid-row-1 self-start base:col-start-1 base:col-end-13 lg:col-start-7 lg:col-end-12 pb-[40px] lg:pb-[unset] space-y-[40px] lg:space-y-[unset] lg:mt-[100px]">
          <CoreTitle className="flex lg:pb-[30px]">Des lieux uniques</CoreTitle>
          <CoreText className="flex lg:pb-[95px]">
            Les espaces beauté et bien-être sont la concrétisation de plus de dix ans de partenariat entre EMMAÜS Solidarité, L’Oréal et sa Fondation. Situés à Paris pour deux d’entre eux, mais également au Pré-Saint-Gervais et à Nantes, ils constituent une expérience singulière. Ici, les personnes les plus précaires peuvent bénéficier de soins par des professionnels de la socio-esthétique financés par la Fondation L’Oréal, et repartir chaque mois avec des produits de beauté fournis par L’Oréal France. <i>«&nbsp;Un référent social fait une préconisation à la personne et lui propose d’aller vers un espace beauté. C’est une orientation fléchée, et l’équipe sur place est au courant de l’arrivée de la personne. Il y a un suivi car nous sommes dans un projet social, pas dans une prestation de service commercial&nbsp;»</i>, explique Lotfi Ouanezar.
          </CoreText>
        </div>

        <div className="mt-[20px] self-start base:col-start-1 base:col-end-13 lg:col-start-2 lg:col-end-7 lg:mt-[120px]">
          <CoreText className="flex pb-[40px] lg:pb-[95px]">
            Une fois sur place, les bénéficiaires sont accompagnés dans une expérience qui combine la capacité d’écoute propre à la socio-esthétique et les plus hauts standards en termes de soins. <i>«&nbsp;Les boutiques sont belles, lumineuses et ouvertes sur l’extérieur, les produits sont haut de gamme&nbsp;»</i>, explique Pauline Ngomé. Tout est fait pour respecter la dignité de ceux qui passent la porte des espaces, quelle que soit leur situation. <i>«&nbsp;Nous souhaitons que les personnes puissent choisir [leurs produits], pour certaines qui ont toujours subi dans la vie, c’est un changement très important&nbsp;»</i>, précise Lotfi Ouanezar.
          </CoreText>
        </div>

        <div className="base:col-start-1 base:col-end-13 pr-[10vw] lg:pr-[unset] justify-self-center lg:justify-self-end lg:col-start-9 lg:col-end-12">
          <Quote
            direction="right"
            author="Lotfi Ouanezar"
            about={`Directeur général d'EMMAÜS Solidarité`}
            pictureSrc="/assets/images/article3/portrait1-article3.png"
            className2="justify-self-end left-[20px]"
          >
            «&nbsp;La beauté, n’est pas la cerise sur le gâteau. C’est le gâteau lui-même.&nbsp;»
          </Quote>
        </div>
      </section>

      <section className="marged relative mb-[40px] grid lg:mb-[115px]">
        <Carousel
          images={[
            { src: "/assets/images/carousel/carousel1-article-3.webp", alt: "Image 1", credit: "©Boby" },
            { src: "/assets/images/carousel/carousel3-article-3.webp", alt: "Image 2", credit: "©Boby" },
            { src: "/assets/images/carousel/carousel2-article-3.webp", alt: "Image 3", credit: "©Boby" },
          ]}
        />
      </section>

      <section className="marged relative space-y-[40px] pb-[40px] lg:space-y-[unset] grid overflow-visible md:mb-[125px]">
        <CoreTitle className="flex base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-12 lg:pb-[50px]">
          La beauté au cœur de la cité
        </CoreTitle>
        <CoreText className="flex base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11">
          Le projet incarne une vision de la beauté qui va bien au-delà de l’esthétique, et joue un rôle de liant social au cœur d’une société que Lotfi Ouanezar n’hésite pas à décrire comme fracturée. <i>«&nbsp;Si je me sens beau, je me sens capable et je peux avancer&nbsp;»</i>, explique-t-il avant d’ajouter que <i>«&nbsp;la beauté ce n’est pas la cerise sur le gâteau, c’est le gâteau lui-même&nbsp;»</i>. Le constat est le même chez Pauline Ngomé, qui note que <i>«&nbsp;la beauté apporte une confiance et une sérénité. Tu prends ton miroir, tu te vois beau, alors tu reviens&nbsp;»</i>. Les espaces sont d’ailleurs largement mis à contribution pour préparer les entretiens d’embauche, avec un impact direct sur le processus de réinsertion des personnes précaires. Au-delà de cette forme d’<i>empowerment</i>¹, les espaces beauté permettent de réinstaurer des rituels chez des personnes qui ont tendance à perdre leurs repères spatio-temporels. La sortie, le déplacement et le rendez-vous <i>«&nbsp;participent à instaurer une rigueur et un cadre&nbsp;»</i>, explique Lotfi Ouanezar. Derrière les vitrines des espaces beauté et bien-être, c’est finalement un projet de société qui se joue. <i>«&nbsp;La solidarité fait la force d’une nation, nous avons tout à gagner à encourager un nouveau mode de regard sur les précaires&nbsp;»</i>, conclut Lotfi Ouanezar.
        </CoreText>
      </section>

      <section className="marged relative space-y-[40px] lg:space-y-[unset] grid">
        <CoreTitle className="flex pt-[0px] base:col-start-1 base:col-end-13 lg:col-start-5 lg:col-end-12 lg:pb-[40px]">
          Une initiative utile
        </CoreTitle>
        <CoreText className="flex base:col-start-1 base:col-end-13 lg:col-start-5 lg:col-end-12 xl:col-end-11 lg:block">
          Le positionnement des espaces beauté et bien-être au coeur des enjeux de société leur a permis de trouver une place naturelle auprès des acteurs sociaux et des personnes accompagnées. Plus de 11&nbsp;200 personnes ont bénéficié de soins, alors que 35&nbsp;000 produits ont été distribués en à peine trois ans. De nombreux partenaires associatifs et collectivités s’appuient désormais sur les espaces dans le cadre de leurs programmes d’accompagnement. <i>«&nbsp;Ils sont une vingtaine à nous orienter des personnes aujourd’hui. Cela va des mairies d’arrondissement aux associations partenaires&nbsp;»</i>, détaille Lotfi Ouanezar. Des indicateurs plus inattendus, comme la forte proportion d’hommes accompagnés, soulignent également la pertinence du modèle. <i>«&nbsp;Nous pensions toucher essentiellement des femmes, mais à notre grande surprise, 38&nbsp;% de la fréquentation est réalisée par des hommes&nbsp;»</i>, indique Lotfi Ouanezar. Ces constats, associés à l’engouement des villes qui accueillent les espaces beauté et bien-être, laissent imaginer un déploiement de cette initiative sur l’ensemble du territoire dans un futur proche.
        </CoreText>
        <div className="lg:col-start-1 lg:col-end-13 lg:pt-[120px]">
          <p className="text-[12px] font-roboto font-light">(1) [Traduction] : Renforcement de la confiance en soi</p>
        </div>

        <div className="grid-row-1-4 flex h-fit !-mt-[0px] lg:-mt-[unset] justify-center gap-[40px] base:col-start-1 lg:top-[130px] lg:col-end-5 lg:flex-col lg:items-center">
          <div className="flex flex-col items-center">
            <ExportedPicture
              className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]"
              alt="icon"
              src="/assets/images/article3/femme-icon.svg"
              priority={true}
            />
            <div className="font-roboto text-[24px] font-bold md:text-[36px]">
              <AnimatedContainer balise="div" trigger="load" direction="up">
                <Count style="mid" addSpaceNumber={true} showPlusSign start={0} end={11200} duration={1} delay={0.5} />
              </AnimatedContainer>
            </div>
            <p className="pb-[40px] font-roboto text-[12px] font-bold md:text-[18px]">bénéficiaires de soin</p>
          </div>
          <div className="flex flex-col items-center">
            <ExportedPicture
              className="h-[80px] w-[80px] lg:h-[120px] lg:w-[120px]"
              alt="icon"
              src="/assets/images/article3/product-icon.svg"
              priority={true}
            />
            <div className="font-roboto text-[24px] font-bold md:text-[36px]">
              <AnimatedContainer balise="div" trigger="load" direction="up">
                <Count style="mid" addSpaceNumber={true} showPlusSign start={0} end={35000} duration={1} delay={0.5} />
              </AnimatedContainer>
            </div>
            <p className="font-roboto text-[12px] font-bold md:text-[18px]">produits distribués</p>
          </div>
        </div>
      </section>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        slug="emmaus-solidarite-et-loreal"
        sortFunction={[5, 3, 4, 1, 2, 7, 6]}
      />
      <Cookies />
    </div>
  );
}
