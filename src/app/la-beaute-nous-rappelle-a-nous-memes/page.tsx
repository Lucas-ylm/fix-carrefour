"use client";
import { useWindowSize } from "@/components/hook/useWindowSize";
import { CoreTextChapo } from "@/components/loreal/CoreTextChapo";
import { CoreTextITW } from "@/components/loreal/CoreTextITW";
import { CoreTitle } from "@/components/loreal/CoreTitle";
import { HighlightText } from "@/components/loreal/HighlightText";
import { Quote } from "@/components/loreal/Quote";
import { Tag } from "@/components/loreal/Tag";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import SectionArticleHero from "@/components/sections/SectionArticleHero";
import SectionVignettes from "@/components/sections/SectionVignettes";
import Cookies from "@/components/templateComponent/Cookies";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { useGSAP } from "@gsap/react";
import { useScroll } from "framer-motion";
import { useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import { TransitionContext } from "../../components/context/TransitionContext.js";
import gsap from "gsap";

export default function Article5() {
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
            <span className="not-italic">
              «&nbsp;La beauté est multiple, <br /> mais 
              l’émotion du beau <br /> est <span className="italic font-extrabold">universelle</span>.&nbsp;» 
              <span className="font-roboto text-[20px] font-bold inline lg:hidden lg:tracking-[-1px]"> <br /> Marie Robert,&nbsp;philosophe</span>
            </span>
          }
          mainSubTitle="Marie Robert,&nbsp;philosophe"
          plane1="/assets/images/hero/marie-robert-circle.png"
          plane2="/assets/images/hero/marie-robert-ombre.png"
          plane3="/assets/images/hero/marie-robert-portrait.png"
          backgroundClass="gradient-white"
        />
      </div>

      <Menu>
        <NavBar />
      </Menu>

      <section className="marged grid pt-20 lg:pt-28">
        <div className="h-fit top-[120px] hidden lg:sticky lg:block lg:col-start-2 lg:col-end-6">
          <Quote
            direction="left"
            className="lg:mt-[0px]"
            author="Marie Robert"
            about={`Professeure de philosophie à l’université, au lycée, et fondatrice d’écoles`}
            pictureSrc="/assets/images/article5/portrait-marie-robert.png"
          >
            «&nbsp;Il faut déconstruire le regard qui voudrait qu’il y ait du ridicule ou du superficiel dans la beauté.&nbsp;» 
          </Quote>
        </div>

        <div className="grid space-y-[40px] lg:col-start-7 lg:col-end-11">
          <Tag>Interview</Tag>
          <CoreTitle>Marie Robert</CoreTitle>
          <CoreTextChapo elementClassName="lg:text-[18px]">
          Professeure de philosophie à l’université, au lycée, et fondatrice d’écoles. Elle consacre son temps à la transmission sous toutes ses formes, du podcast à Instagram, en passant par le livre. Son sixième ouvrage, <span className="italic font-bold"> Le&nbsp;miracle du&nbsp;réconfort</span> (Flammarion, 2024) est sorti le 9 octobre dernier. Elle évoque avec le Groupe L’Oréal notre rapport plus que jamais essentiel à la beauté.
          </CoreTextChapo>

          <div className="h-fit top-[120px] pl-[12vw] justify-self-center block base:col-start-1 base:col-end-13 lg:hidden">
            <Quote
              direction="left"
              className="lg:mt-[0px]"
              author="Marie Robert"
              about={`Professeure de philosophie à l’université, au lycée, et fondatrice d’écoles`}
              pictureSrc="/assets/images/article5/portrait-marie-robert.png"
            >
              «&nbsp;Il faut déconstruire le regard qui voudrait qu’il y ait du ridicule ou du superficiel dans la beauté.&nbsp;» 
            </Quote>
          </div>

          <HighlightText>
            La beauté est un sujet central dans nos existences qui n’est pas naturellement associé à la philosophie.
            Pourquoi&nbsp;?
          </HighlightText>

          <CoreTextITW>
            De nombreux philosophes ont parlé du sujet. Platon en premier lieu, qui va associer la beauté à l’idée du bon. Mais les réflexions autour de la beauté opèrent toujours une distinction entre le jugement du beau et la beauté esthétique, qui est plutôt condamnée d’un point de vue philosophique. Sur la question du jugement du beau, Emmanuel Kant est incontournable. Il va décortiquer et analyser ce qui se passe quand on dit <i>«&nbsp;c’est beau&nbsp;»</i>, et analyser pourquoi le jugement du beau n’est semblable à aucun autre. La philosophie va plutôt considérer l’importance du beau et moins celle de la beauté esthétique, associée au règne des apparences. C’est sans doute une position réductrice qu’il faut déconstruire.
          </CoreTextITW>
          <HighlightText>
            Pourquoi est-il réducteur de mettre au rebut cette beauté esthétique&nbsp;?
          </HighlightText>
          <CoreTextITW>
            Cela revient à donner une définition figée et très normée de la beauté, alors que les canons n’ont cessé d’évoluer. L’Antiquité met en avant les musculatures pour transmettre une idée de puissance. On a parfois valorisé le fait d’être bien en chair, qui identifie à une certaine classe sociale. On a montré des visages diaphanes quand le corps devait se faire plus discret pour laisser place à l’âme et au spirituel. Au-delà de cet aspect mouvant, il est important d’identifier ce qui se joue dans la beauté. Il y a d’abord cette dimension esthétique, qui est très variable. Il y a ensuite un aspect affectif qui renvoie à Spinoza, qui disait en substance <strong>je t’aime non pas parce que je te trouve beau, mais c’est parce que je t’aime que je te trouve beau.</strong> Enfin, il y a la part spirituelle de la beauté, liée au mystère. Nous sommes saisis par la beauté de l’autre parce qu’il est autre. Il est important de remettre ces dimensions esthétiques, affectives et spirituelles au centre de notre discours. Ce triptyque nous aide à prendre conscience de l’amplitude de la beauté esthétique. Cela fait écho à une histoire qui m’a profondément marquée. J’assistais à une conférence au Mémorial de la Shoah et une femme survivante d’Auschwitz racontait que dans son baraquement, une des seules choses qu’elle avait réussi à sauver de sa vie d’avant était un tube de rouge à lèvres presque terminé. Le soir, dans l’obscurité, elle s’en mettait un tout petit peu sur les lèvres. Elle expliquait que ce geste l’avait maintenue en vie. Elle n’avait pas de miroir pour se regarder, ce n’était pas un geste lié à la représentation. Le rituel lui permettait d’exister en tant que femme et en tant qu’individu. Voilà pourquoi ce n’est pas superficiel. La beauté nous rappelle à nous-même et à notre identité, et ce n’est pas simplement une question de normes esthétiques.
          </CoreTextITW>
          <HighlightText>Est-ce qu’une beauté hors-norme est possible&nbsp;?</HighlightText>
          <CoreTextITW>
            Plus qu’une beauté hors-norme, j’ai envie de parler de beauté singulière. C’est une tendance aujourd’hui, même dans les espaces de communication de marque. Il n’y a pas de visage qui corresponde à la beauté normée. Il y a simplement des particularités ou des traits qui vont être plus singuliers que d’autres. Dès lors, la question est de savoir comment intégrer ces traits dans une identité. La représentation est un enjeu majeur. Si j’apparais dans un univers où les gens se ressemblent et que j’ai un trait plus singulier, je vais forcément me sentir inscrit en différence. Si les représentations de la beauté sont plus amples, cette question du regard de l’autre se dissout beaucoup plus. Ça reste un enjeu, parce qu’on a toujours envie de se présenter à l’autre avec le plus de confiance possible, mais la question du regard se pose moins. C’est extrêmement marquant chez les enfants.
          </CoreTextITW>
          <HighlightText>Comment agir pour une beauté émancipatrice&nbsp;?</HighlightText>
          <CoreTextITW>
            En arrêtant de la déconsidérer. La beauté c’est le soin de soi, c’est s’accorder du temps pour créer de la confiance, pour ritualiser. L’enjeu est de dire <i>«&nbsp;j’en vaux la peine&nbsp;»</i>, ce qui fait écho au célèbre slogan de L’Oréal Paris, <i>«&nbsp;je le vaux bien&nbsp;»</i>. Il faut déconstruire le&nbsp;regard qui voudrait qu’il y ait du ridicule ou du superficiel dans la beauté. Il faut également remettre en question sa dimension individualiste. La beauté fait gagner en ancrage et en confiance, en octroyant cette possibilité d’exister, elle rend disponible aux autres. C’est la possibilité d’un vivre ensemble plus apaisé puisque l’autre n’a pas à prendre en charge mon identité.
          </CoreTextITW>
          <HighlightText>
            Comment une beauté plurielle peut-elle s’articuler avec l’éventualité d’une beauté universelle&nbsp;?
          </HighlightText>
          <CoreTextITW>
            La beauté est multiple, mais l’émotion du beau est universelle. Ça renvoie une nouvelle fois à Kant. La réconciliation entre l’émotion et la raison qui se joue dans l’expérience du beau est universelle. C’est la possibilité de quelque chose qui nous dépasse. Certaines personnes sont parfois considérées comme les plus belles de la Terre. Selon des critères d’harmonie physique, ce ne sont pas celles que l’on citerait en premier. Nous sommes obsédés par l’idée d’identifier des canons de beauté, et dans les faits nous sommes attachés à des représentations de la beauté qui racontent autre chose. Nous sommes attachés à un récit. Ce qui devient iconique, c’est une représentation qui va faire consensus, la part d’émotion produite par cette représentation.
          </CoreTextITW>
          <HighlightText>
            Si la beauté est le précipité d'une époque, comment participe-t-elle à nous lier&nbsp;?
          </HighlightText>
          <CoreTextITW>
            Elle ne nous lie pas par volonté de ressemblance. Elle nous lie parce qu’elle crée des repères collectifs. J’aime beaucoup les œuvres qui parviennent à devenir universelles. J’aime les choses populaires ou <i>mainstream</i>¹ parce qu’il y a un plaisir du partage. Le consensus autour d’un livre, d’un film ou d’une figure est quelque chose d’extraordinaire. Ce n’est pas un simple rapport d’admiration, c’est un terrain en commun. Nous sommes différents, nous n’avons pas le même âge, et pourtant nous pouvons partager quelque chose, être émus. Quand Emmanuel Kant parle de la réconciliation du cœur et de l’esprit, cela renvoie à une forme d’apaisement. Celui qui dit <i>«&nbsp;c’est beau&nbsp;»</i> n’a pas peur de se tromper, il ressent que c’est beau. Et quand c’est fait avec d’autres, ça devient vertigineux.
          </CoreTextITW>
        </div>
      </section>
      
      <section className="marged mt-[40px] grid">
        <div className="base:col-start-1 lg:col-start-2 base:col-end-13 pt-[20px]">
          <p className="text-[12px] font-roboto font-light">(1) [Traduction] : Largement plébicitées</p>
        </div>

        <ExportedPicture
          src="/assets/images/article5/img-marie-robert.png"
          alt="Citation de Marie Robert"
          className="pt-[30px] aspect-[16/9] base:col-start-1 base:col-end-13 lg:col-start-2 lg:col-end-12"
        />
      </section>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        slug="la-beaute-nous-rappelle-a-nous-memes"
        sortFunction={[5, 3, 4, 1, 2, 7, 6]}
      />
      <Cookies />
    </div>
  );
}
