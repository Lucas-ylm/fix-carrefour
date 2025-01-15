export type VignetteImageProps = {
    className: string;
    alt: string;
    src: string;
  };
  
  export type VignetteData = {
    title: string;
    waitingTitle: React.ReactNode;
    waitingText: React.ReactNode;
    isActive: boolean;
    slug: string;
    image: VignetteImageProps;
  };
  
  const vignetteData: VignetteData[] = [
    {
      title: "La beauté, de la nature au flacon",
      waitingTitle: (
        <span>
          Investir dans les <span className="font-bold italic">Sciences Vertes</span> pour la transformation durable
        </span>
      ),
      waitingText: undefined,
      isActive: true,
      slug: "les-sciences-vertes-ou-quand-la-beaute-s-inspire-de-la-nature",
      image: {
        className: "vignette-visual",
        src: "/assets/images/vignettes/vignette-science.png",
        alt: "visu-article-1",
      },
    },
    {
      title: "La beauté, de la nature au flacon",
      waitingTitle: (
        <span>
          Plus circulaire, innovant et allégé&nbsp;: <span className="font-bold italic">l’emballage </span>
          fait sa mue
        </span>
      ),
      waitingText: undefined,
      isActive: true,
      slug: "emballages-une-question-de-ressources",
      image: {
        className: "vignette-visual",
        src: "/assets/images/vignettes/vignette-emballage.png",
        alt: "visu-article-2",
      },
    },
    {
      title: "Les forces de la beauté",
      waitingTitle: (
        <span>
          EMMAÜS Solidarité et L'Oréal&nbsp;: quand la beauté <span className="font-bold italic">nous relie</span>
        </span>
      ),
      waitingText: undefined,
      isActive: true,
      slug: "emmaus-solidarite-et-loreal",
      image: {
        className: "vignette-visual",
        src: "/assets/images/vignettes/vignette-emmaus.png",
        alt: "visu-article-3",
      },
    },
    {
      title: "Les forces de la beauté",
      waitingTitle: (
        <span>
          «&nbsp;J’ai compris que j’avais droit à <span className="font-bold italic">ma&nbsp;beauté</span>.&nbsp;»
        </span>
      ),
      waitingText: undefined,
      isActive: true,
      slug: "jai-compris-que-javais-droit-a-ma-beaute",
      image: {
        className: "vignette-visual",
        src: "/assets/images/vignettes/vignette-beaute.png",
        alt: "visu-article-4",
      },
    },
    {
      title: "Les forces de la beauté",
      waitingTitle: (
        <span>
          «&nbsp;La beauté est multiple, mais l’émotion du beau est <span className="font-bold italic">universelle</span>.&nbsp;»
        </span>
      ),
      waitingText: undefined,
      isActive: true,
      slug: "la-beaute-nous-rappelle-a-nous-memes",
      image: {
        className: "vignette-visual",
        src: "/assets/images/vignettes/vignette-universelle.png",
        alt: "visu-article-5",
      },
    },
    {
      title: "La beauté de demain",
      waitingTitle: (
        <span className="text-balance">
          <span className="font-bold italic">Beauté augmentée</span> et quête&nbsp;d'humanité
        </span>
      ),
      waitingText: undefined,
      isActive: true,
      slug: "beaute-augmentee-et-quete-humanite",
      image: {
        className: "vignette-visual",
        src: "/assets/images/vignettes/vignette-tech.png",
        alt: "visu-article-6",
      },
    },
    {
      title: "La beauté de demain",
      waitingTitle: (
        <span>
          «&nbsp;Innovante, inclusive et plus responsable&nbsp;:
          <span className="font-bold italic"> nous sommes fiers</span> de notre usine.&nbsp;»
        </span>
      ),
      waitingText: undefined,
      isActive: true,
      slug: "innovante-inclusive-et-plus-responsable",
      image: {
        className: "-bottom-10",
        src: "/assets/images/vignettes/vignette-usine.png",
        alt: "visu-article-7",
      },
    },
  ];
  
  export default vignetteData;
  