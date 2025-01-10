"use client";
import { Count } from "@/components/animation/Count";
import { useWindowSize } from "@/components/hook/useWindowSize";
import { AnimatedText } from "@/components/loreal/AnimatedText";
import Carousel from "@/components/loreal/Carousel";
import { CoreText } from "@/components/loreal/CoreText";
import { CoreTextITW } from "@/components/loreal/CoreTextITW";
import { CoreTitle } from "@/components/loreal/CoreTitle";
import { Quote } from "@/components/loreal/Quote";
import Menu from "@/components/modal/Menu";
import NavBar from "@/components/navbar/NavBar";
import SectionArticleHero from "@/components/sections/SectionArticleHero";
import SectionVignettes from "@/components/sections/SectionVignettes";
import LazySvg from "@/components/svgComponent/LazySvg";
import Cookies from "@/components/templateComponent/Cookies";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Article2() {
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
        subTitle="La beauté, de la nature au flacon"
        mainTitle={
          <span>
            Plus circulaire, innovant et {width > 768 && <br />} allégé : 
            <span className="font-extrabold italic"> l’emballage </span>
            {width > 768 && <br />}
            fait sa&nbsp;mue
          </span>
        }
        plane1="/assets/images/hero/emballage-round.png"
        plane2="/assets/images/hero/emballage-shadow.png"
        plane3="/assets/images/hero/emballage.png"
        plane1ClassName="bottom-0 w-[90%] xs:w-[50%] right-[5%] xs:h-[45vmax] xs:bottom-[-10%] xs:right-[40%] md:w-[40%] md:right-[45%] lg:h-auto lg:right-[6%] lg:bottom-0 lg:w-[38%]"
        plane2ClassName="bottom-[20px] w-full xs:w-[70%] right-[-2%] xs:right-[28%] h-[45vmax] lg:h-auto lg:right-[17%] lg:bottom-[2%] lg:w-[10%]"
        plane3ClassName="bottom-[20px] w-full xs:w-[70%] h-[45vmax] lg:h-auto lg:right-[19%] lg:bottom-[2%] lg:w-[10%]"
        backgroundClass="gradient-white"
      />
      
      <Menu>
        <NavBar />
      </Menu>

      <section className="marged my-20 grid space-y-[40px] lg:my-32 lg:space-y-[20px]">
        <div className="base:col-start-1 base:col-end-13 lg:col-start-1 xl:col-start-2 lg:col-end-7 self-center">
          <AnimatedText className="lg:pt-20">
            «&nbsp;Qu’importe le flacon, pourvu qu’on ait l’ivresse&nbsp;»
          </AnimatedText>
          <p className="font-roboto text-[20px] font-bold pb-[40px]">Alfred de Musset (<i>La Coupe et les Lèvres</i>, 1831)</p>
          <CoreTextITW
            elementClassName="lg:text-[18px] leading-[28px]"
            className="text-black lg:pb-20 lg:col-start-2"
          >
            Presque deux siècles plus tard, le poète serait étonné de constater que l’Européen moyen produit chaque année plus de 180 kg de déchets d’emballages¹, faisant du «&nbsp;flacon&nbsp;» un objet de préoccupation écologique majeure. Si l’industrie alimentaire est aujourd’hui la principale productrice, le sujet irrigue tous les secteurs. Pour celui de la beauté, la barre est encore plus haute en matière d’exigence. Plus qu’un simple contenant, l’emballage est vecteur d’innovation, de différenciation et d’engagement. Il reflète les valeurs de la marque et répond aux nouvelles aspirations des consommateurs, notamment en termes de responsabilité environnementale. Au sein du Groupe L’Oréal, ce défi est au cœur des préoccupations depuis plusieurs décennies, et donne lieu à des réponses innovantes. Innovations technologiques, changements d’usage et transformations industrielles majeures sont au programme, alors que le groupe s’est fixé un objectif ambitieux : réduire de 20&nbsp;% en intensité la quantité d’emballage utilisée dans ses produits d’ici à 2030.
          </CoreTextITW>
        </div>
        <ExportedPicture
          className="w-full base:col-start-1 base:col-end-13 lg:col-start-8 lg:col-end-13 lg:flex lg:justify-end"
          alt="Biologie"
          src="/assets/images/article2/picture-lancome.png"
          priority={true}
        />
      </section>

      <section className="marged my-20 grid space-y-[40px] lg:my-48 lg:space-y-[60px]">
        <CoreTitle className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Emballés par le futur
        </CoreTitle>
        <CoreTextITW 
          elementClassName="font-light font-bitter leading-[28px]"
          className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Derrière les baies d’un immeuble moderne de Clichy, les blouses blanches se croisent dans un ballet incessant. Elles naviguent d’une imprimante 3D à d’immenses <i>moodboards</i>², dont certains enrichis par l’intelligence artificielle. Elles frôlent des paillasses recouvertes de machines complexes et de verrerie de laboratoire. Et pour cause : nous sommes dans un des cinq <i>Packaging Labs</i>³ de L’Oréal, véritables sanctuaires dédiés aux enjeux du <i>packaging</i>⁴. Ces derniers emploient à plein temps plus de 500 personnes dans le monde avec un seul objectif : inventer l’emballage de demain, capable de réussir la synthèse entre performance technique, responsabilité environnementale et attractivité. On y découvre des spécialistes du papier qui tentent d’inviter la cellulose dans l’humidité de nos salles de bains. On croise des chercheurs qui travaillent à l’invention de verres nouvelle génération. C’est également au sein de ces laboratoires que naissent les principales «&nbsp;rénovations&nbsp;» <i>packaging</i>, qui permettent notamment à 97&nbsp;% des produits lancés ou rénovés par le groupe d’améliorer leur profil environnemental⁵.
        </CoreTextITW>
      </section>

      <section className="marged my-20 grid space-y-10 lg:my-48 lg:space-y-0">
        <ExportedPicture
          className="base:col-start-1 base:col-end-13 lg:col-start-1 lg:col-end-6 lg:w-[100%]"
          alt="Luxe"
          src="/assets/images/article2/luxe2.png"
          priority={true}
        />
        <CoreText className="lg:col-start-7 lg:col-end-12 lg:mt-20 self-center">
          Ici, le travail est pluridisciplinaire par défaut. Aux côtés des chercheurs et des ingénieurs, des équipes de designers s’échinent à repenser nos gestes du quotidien, dans un mariage subtil de recherche esthétique, d’ergonomie et d’écoconception. On découvre ainsi la rénovation des flacons Elseve de L’Oréal Paris, marque emblématique du Groupe. Ici, l’intensité d’emballage a été réduite de 20&nbsp;% sans impact sur le ressenti du consommateur. Le flacon est également devenu rechargeable grâce à un capot facilement déclipable et reclipable, ce qui ouvre la voie à de nouveaux usages vertueux. 
        </CoreText>
      </section>

      <section className="marged my-20 grid space-y-[40px] lg:my-48 lg:space-y-[60px]">
        <CoreTitle className="lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">Les 3R d’une nouvelle ère</CoreTitle>
        <CoreText className="lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Ces espaces de pointe s’inscrivent dans le cadre plus global du programme <a href="https://www.loreal.com/fr/nos-engagements/pour-la-planete/" className="hover:underline" target="_blank" rel="noopener noreferrer">L’Oréal pour le Futur</a>, boussole du
          groupe en matière de responsabilité environnementale. <i>«&nbsp;Nous avons établi une stratégie packaging durable qui repose sur les 3R : Réduire, Remplacer, Recycler&nbsp;»</i>, explique Elodie Bernadi, directrice Développement Durable
          et RSE de L’Oréal France. Derrière le triptyque, c’est un véritable changement industriel et
          culturel qui est engagé. <i>«&nbsp;Nos succès ne sont pas forcément visibles du consommateur final. Mais les
          rénovations packaging, ou la progression sur tout notre portefeuille pour atteindre 32 % de plastiques
          recyclés ou biosourcés, voire même plus de 87 % sur nos plastiques PET, qui représentent une grande partie de
          notre portefeuille, ou 99 % du carton des étuis certifiés issus de forêts gérées de façon durable, c’est
          colossal pour nous&nbsp;»</i>, ajoute Elodie Bernadi. 
        </CoreText>
      </section>

      <section className="flex text-center lg:items-start flex-wrap gap-[5vw] px-[20px] lg:px-[40px] justify-center mt-[unset] py-[0px] lg:space-y-[unset] lg:py-[100px]">
          <div className="flex flex-col items-center text-center">
            <LazySvg
              name="recyclage"
              width={100}
              height={100}
              className="mb-[20px]"
            />
            <p className="font-roboto font-bold text-[20px]">
              <span className="text-[36px]">
                <Count style="mid" addSpaceNumber showPercentage start={0} end={87} duration={1} delay={1} />
              </span>
            </p>
            <p className="font-roboto text-balance font-bold text-[20px]">de plastique PET recyclé 
            <br /> ou biosourcés en 2023</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LazySvg
              name="carton-icon"
              width={100}
              height={100}
              className="mb-[20px]"
            />
            <p className="font-roboto font-bold text-[20px]">
              <span className="text-[36px]">
                <Count style="mid" addSpaceNumber showPercentage start={0} end={99} duration={1} delay={1} />
              </span>
            </p>
            <p className="font-roboto font-bold text-[20px]">
              du carton des étuis certifiés <br />
              issus de forêts gérées <br />
              de façon durable en 2023
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <LazySvg
              name="arrow-emballage"
              width={100}
              height={100}
              className="mb-[20px]"
            />
            <p className="font-roboto font-bold text-[20px]">
              <span className="text-[36px]">
                <Count style="mid" addSpaceNumber showPercentage start={0} end={20} duration={1} delay={1} />
              </span>
            </p>
            <p className="font-roboto font-bold text-[20px]">
              de réduction en intensité <br />
              emballage d'ici à 2030
            </p>
          </div>
      </section>

      <section className="marged relative mt-[40px] mb-[30px] grid lg:mt-48">
        <Carousel
          images={[
            { src: "/assets/images/carousel/240212_REFILL_COMPO_FRAGRANCE_GESTE.jpg", alt: "Image 1"},
            { src: "/assets/images/carousel/2024-06-13.jpg", alt: "Image 2"},
            { src: "/assets/images/carousel/LRP_LIPIKAR_VISUEL_CAMPAGNE.jpg", alt: "Image 3"},
            { src: "/assets/images/carousel/PradaBeauty.jpg", alt: "Image 4"},
          ]}
        />
        <CoreText 
          className="base:col-start-5 text-end base:col-end-13 lg:col-start-10 lg:col-end-13 xl:col-start-10 xl:col-end-13 pt-[20px]"
          elementClassName="text-[14px] text-end lg:!text-[16px] !font-light !font-roboto"
        >
          Dernières innovations de produits rechargeables sur les marques de L'Oréal&nbsp;Groupe
        </CoreText>
      </section>

      <section className="marged relative grid">
        <CoreText className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10 lg:mt-20">
          Dans les faits, cette transformation recouvre une myriade d’actions, tournées vers l’ambition globale de contribuer à limiter l'impact sur la planète. On pense immédiatement à la réduction du poids des emballages, déjà effective à hauteur de 15 à 20 % pour les flacons de parfum en verre. Moins évidentes, les logiques d’innovation ouverte sont tout aussi importantes. Avec ses partenaires historiques comme avec des startups, L’Oréal s’inscrit dans des logiques d’écosystèmes afin d’accélérer la transition. <i>«&nbsp;Avec Albéa, un de nos grands fournisseurs au niveau mondial, nous avons conçu un tube première génération constitué à 50 % à base de carton qui est commercialisé sur plusieurs de nos marques, comme La Roche-Posay, Laboratoires Vichy, Garnier ou La Provençale&nbsp;»</i>, explique Elodie Bernadi. Côté startups, cette ouverture s’incarne par exemple dans le consortium que L’Oréal a co-fondé avec Carbios, une entreprise française pionnière à qui l’on doit un procédé de recyclage du plastique PET dit «&nbsp;enzymatique&nbsp;». Ce dernier permet la fabrication de nouveaux produits à partir de matériaux recyclés à 100 % grâce à ce procédé biotechnologique. 
        </CoreText>
      </section>

      <section className="marged mt-20 grid space-y-[40px] lg:my-48 lg:space-y-20">
        <div className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          <CoreTitle elementClassName="pb-[15px]" >
            Faire émerger
          </CoreTitle>
          <CoreTitle className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
            de nouveaux gestes
          </CoreTitle>
        </div>
        <CoreText className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Au-delà de la recherche, des startups et des technologies, un dernier acteur est amené à jouer un rôle majeur dans l’évolution des pratiques d’emballage : le consommateur. La question du réemploi est aujourd’hui une priorité absolue pour le Groupe L’Oréal, qui déploie des recharges sur une grande partie de son catalogue avec des gains de 50 % de matière (plastique, carton, verre, métal...) en moyenne par rapport au flacon «&nbsp;parent&nbsp;». Un changement de paradigme important pour nos habitudes de consommation qui demande un véritable effort d’accompagnement. <i>«&nbsp;Il faut être très patient quand on installe de nouveaux gestes. C’est un apprentissage pour nous comme pour nos clients (entre autres salons de coiffure, pharmacies et parapharmacies, parfumeries et grande distribution). Il faut également apporter un bon niveau de pédagogie et accompagner les consommateurs sur le temps long&nbsp;»</i>, précise Elodie Bernadi. 
        </CoreText>
        <CoreText className="base:col-start-1 base:col-end-13 lg:col-start-3 lg:col-end-11 xl:col-start-4 xl:col-end-10">
          Pour réussir cette transition vers le réemploi, L’Oréal multiplie les initiatives. Investissement, marketing et publicité mobilisant les égéries de ses marques sont d’ores et déjà orientés vers la pédagogie et la mise en avant des co-bénéfices, comme le gain de place, la praticité ou les effets de club de fidélité. Un travail est mené pour raconter la valeur des flacons que l’on jette aujourd’hui, alors que certains sont presque des objets d’art. À terme, pour que l’usage s’installe, il est impératif de rendre désirable le fait de réutiliser un emballage ou d’offrir une recharge. <i>«&nbsp;C’est un travail que nous menons avec nos égéries, comme Emma Watson ou Eva Longoria, en qui nous croyons beaucoup pour convaincre les consommatrices en rendant le geste facile et désirable&nbsp;»</i>, conclut Elodie Bernadi.
        </CoreText>
      </section>

      <section className="marged space-y-[30px] grid lg:my-20">
        <Quote
          direction="left"
          elementClassName="base:col-start-2 hidden lg:block base:col-end-13 grid-row-1 lg:col-start-9 lg:col-end-13 lg:w-[100%]"
          className=""
          pictureSrc="/assets/images/article2/elodie-quote.png"
          author="Elodie Bernadi"
          about={`Directrice Développement Durable et RSE de L’Oréal France `}
        >
          «&nbsp;L’Oréal participe depuis des dizaines d’années à la mise en place d’une filière du tri et du recyclage.&nbsp;» 
        </Quote>
        <CoreText className="self-center hidden lg:block base:col-start-1 base:col-end-13 lg:col-start-2 grid-row-1 lg:col-end-8 lg:mt-[150px] p-[50px] border-solid border-[0.5px] border-black">
          En France, c’est Citeo qui gère la filière du tri et du recyclage sur les emballages ménagers. le Groupe L’Oréal, comme la plupart des contributeurs d’emballages ménagers, finance en partie cette filière à travers une contribution, pour chaque emballage mis sur le marché. Cela permet également de financer des innovations ou le développement de nouvelles filières. <i>«&nbsp; Dans le cadre de la loi AGEC, de nouvelles éco-contributions vont également voir le jour sur le sujet, je pense au régime de responsabilité élargie des producteurs (REP) sur les emballages industriels et commerciaux »</i>, explique Elodie Bernadi. Au-delà de l’aspect technique, Citeo porte également une ambition pédagogique qui se traduit dans la campagne <i>«&nbsp;On ne lâche rien&nbsp;!&nbsp;»</i>, dont l’ambition est de valoriser le geste de tri. Cela fait écho au programme <a href="https://www.beaute.fr/" className="hover:underline" target="_blank" rel="noopener noreferrer">«&nbsp;Trions en beauté&nbsp;»</a> développé par le Groupe L’Oréal afin de mettre en avant des consignes de tri très précises pour la totalité des produits du groupe.
        </CoreText>
        <Quote
          direction="left"
          elementClassName="base:col-start-1 block lg:hidden base:col-end-13 pl-[12vw] lg:pl-[unset] justify-self-center lg:justify-self-start"
          className=""
          pictureSrc="/assets/images/article2/elodie-quote.png"
          author="Elodie Bernadi"
          about={`Directrice Développement Durable et RSE de L’Oréal France `}
        >
          «&nbsp;L’Oréal participe depuis des dizaines d’années à la mise en place d’une filière du tri et du recyclage.&nbsp;» 
        </Quote>
        <CoreText className="self-center block lg:hidden base:col-start-1 base:col-end-13 lg:col-start-2 lg:col-end-7 lg:mt-[150px] px-[10px] py-[15px] -mx-[10px] border-solid border-[0.5px] border-black">
          En France, c’est Citeo qui gère la filière du tri et du recyclage sur les emballages ménagers. le Groupe L’Oréal, comme la plupart des contributeurs d’emballages ménagers, finance en partie cette filière à travers une contribution, pour chaque emballage mis sur le marché. Cela permet également de financer des innovations ou le développement de nouvelles filières. <strong><i>«&nbsp;Dans le cadre de la loi AGEC, de nouvelles éco-contributions vont également voir le jour sur le sujet, je pense au régime de responsabilité élargie des producteurs (REP) sur les emballages industriels et commerciaux&nbsp;»</i></strong>, explique Elodie Bernadi. Au-delà de l’aspect technique, Citeo porte également une ambition pédagogique qui se traduit en ce moment dans la campagne «&nbsp;On ne lâche rien&nbsp;!&nbsp;», dont l’ambition est de valoriser le geste de tri. Cela fait écho au programme <a href="https://www.beaute.fr/" className="hover:underline" target="_blank" rel="noopener noreferrer">«&nbsp;Trions en beauté&nbsp;»</a> développé par le Groupe L’Oréal afin de mettre en avant des consignes de tri très précises pour la totalité des produits du groupe.
        </CoreText>
      </section>

      <section className="marged mt-[40px] mb-[75px] lg:my-[100px] grid">
        <div className="lg:col-start-1 lg:col-end-13 space-y-12 lg:space-y-[16px]">
          <p className=" bg-[#E8E7E3] rounded-[3px] text-center lg:text-start px-[20px] py-[10px] flex tracking-wider justify-center uppercase underline w-full font-roboto text-[10px]">
            <a href="https://www.loreal.com/fr/groupe/decouvrir-loreal/raison-detre/reduire-les-emballages-plastique/" target="_blank">Pour plus d’informations sur la transformation des emballages du Groupe L’Oréal : https://www.loreal.com/fr/groupe/decouvrir-loreal/raison-detre/reduire-les-emballages-plastique/</a>
          </p>
          <p className="font-roboto font-light pt-[10px] leading-[24px] text-[12px]">
            (1) Source : Pacte vert pour l’Europe : En finir avec les déchets d’emballages, encourager la réutilisation et le recyclage, Commission européenne (30/11/2022) <br />
            (2) [Traduction] : Planches de tendances <br />
            (3) [Traduction] : Laboratoires d’emballages <br />
            (4) [Traduction] : Emballage <br />
            (5) : cf. article Investir dans les Sciences Vertes pour la transformation durable : <a className="hover:underline" href="https://la-beaute-creatrice.lemonde.fr/les-sciences-vertes-ou-quand-la-beaute-s-inspire-de-la-nature/" target="_blank">https://la-beaute-creatrice.lemonde.fr/les-sciences-vertes-ou-quand-la-beaute-s-inspire-de-la-nature/</a>
          </p>
        </div>
      </section>

      <SectionVignettes
        isAtBottom={isAtBottom}
        scrollYProgress={scrollYProgress}
        isDragging={isDragging}
        slug="emballages-une-question-de-ressources"
        sortFunction={[1, 7, 6, 2, 5, 3, 4]}
      />

      <Cookies />
    </>
  );
}
