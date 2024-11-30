import { ColorProps } from "@/components/avatar/Avatar";
import { BlockItem } from "@/components/block/Block";
import { Fragment } from "react";
import stylesContent from "../../../components/content/content.module.scss";

export type Profile = {
  article: string;
  extract: BlockItem[];
  color: ColorProps;
  banner: string;
  avatar: {
    isIcon: boolean;
    name: string;
    description: string;
    srcProfile: string;
    altProfile: string;
    srcFruit?: string;
    altFruit?: string;
  };
  content: BlockItem[];
};

export const data: Profile[] = [
  {
    article: "INTERVIEW",
    extract: [
      {
        _type: "quote",
        _id: "quote1",
        children: ["“"],
      },
      {
        _type: "extract",
        _id: "extract1",
        children: [
          <Fragment key="extract1">
            Le premier critère d’achat d’un produit alimentaire, c’est le goût
            et le plaisir.
          </Fragment>,
        ],
      },
      {
        _type: "quote",
        _id: "quote2",
        children: ["“"],
      },
    ],
    banner: "Carrefour nous en parle",
    color: "blue",
    avatar: {
      name: "CAROLINE DASSIÉ",
      description:
        "Directrice Exécutive Global Marketing, Clients et Marques Propres",
      srcProfile: "/assets/images/profile/caroline-dassie.webp",
      altProfile: "caroline-dassie",
      isIcon: false,
    },
    content: [
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            <strong>
              Depuis le lancement du programme Act For Food en 2018, quelles
              nouvelles attentes des consommateurs avez-vous identifiées&nbsp;?
              <br />
              Caroline Dassié –{" "}
            </strong>
            En 2018, Act For Food était au service d’une mission&nbsp;: faire de
            Carrefour le leader de la transition alimentaire pour tous. Les
            clients réclamaient davantage de produits bio, frais et naturels,
            exempts de substances controversées, d’OGM (organisme génétiquement
            modifié) et d’antibiotiques. Ces attentes sont toujours là, mais le
            contexte dans lequel s’inscrit la consommation alimentaire a évolué,
            entre crise du Covid, guerre en Ukraine, inflation… Les tensions sur
            le pouvoir d’achat bouleversent les habitudes, mais cela ne veut pas
            dire que les consommateurs renoncent à mieux manger, comme le montre
            le succès du Nutri-Score, ni qu’ils portent moins d’attention au
            monde agricole ou au bien-être animal.
            <br />
            <br />
            <strong>
              Quelle est la stratégie de Carrefour pour devenir leader de la
              transition alimentaire&nbsp;?
              <br />
              C. D. –{" "}
            </strong>
            Une étude récente de Kantar Worldpanel (2021) montre que 49&nbsp;%
            des foyers comptent au moins une personne
            «&nbsp;flexitarienne&nbsp;», végétarienne ou vegan. Être leader de
            la transition alimentaire, c’est donc être en mesure d’accompagner
            ces désirs de changements présents dans les foyers, ce qui implique
            d’offrir un large choix de produits à base de végétaux ou pauvres en
            gluten, de compléments alimentaires, d’aliments hyperprotéinés, etc.
            Par ailleurs, les études consommateurs confirment que le premier
            critère d’achat est le goût et le plaisir. Nous allons donc
            travailler sur le profil organoleptique des produits, à savoir leur
            texture et leur saveur, tout en améliorant leur profil nutritionnel.
            <br />
            <br />
            <strong>
              Quels exemples d’actions concrètes pour encourager le «&nbsp;bien
              manger&nbsp;» et faciliter l’accès à une alimentation de meilleure
              qualité&nbsp;?
              <br />
              C. D. –{" "}
            </strong>
            Nous travaillons sur plusieurs grands axes à l’horizon 2026. Tout
            d’abord, nous voulons faire de Carrefour Bio, qui est déjà leader du
            marché, la marque bio la plus accessible. Nous voulons aussi
            améliorer le goût des produits de nos marques propres, en conservant
            leur qualité nutritionnelle. Enfin, nous allons pousser les produits
            de la Filière Qualité Carrefour (FQC), qui soutiennent la transition
            du monde agricole, dans nos communications pour améliorer leur
            accessibilité. Par exemple les menus 3, 2, 1, Frais&nbsp;?
            Partez&nbsp;!, lancés lors des Jeux Olympiques et Paralympiques de
            Paris 2024 et qui contiennent des produits frais FQC, pourront être
            transformés en rendez-vous mensuels.
            <br />
            <br />
            <strong>
              Comment Carrefour est-il à l’écoute de ses consommateurs&nbsp;?
              <br />
              C. D. –{" "}
            </strong>
            Carrefour s’est doté d’une base de données qui contient 30&nbsp;000
            avis consommateurs sur plus de 3&nbsp;000 produits, notés de 1 à 5
            par des consommateurs qui les dégustent chez eux. Cette communauté,
            nous l’interrogeons et tenons compte de ses avis. Par exemple, nous
            nous engageons à reformuler tous les produits dont la note est
            inférieure à 4/5 sur leur profil organoleptique, et nous indiquerons
            les notes des consommateurs sur nos prospectus. Connaître l’avis
            d’un client qui a consommé un produit et va le racheter, c’est pour
            nous un élément essentiel de la transition alimentaire.
            <br />
            <br />
            <br />
            <br />
          </Fragment>,
        ],
      },
    ],
  },
  {
    article: "INTERVIEW",
    extract: [
      {
        _type: "quote",
        _id: "quote1",
        children: ["“"],
      },
      {
        _type: "extract",
        _id: "extract1",
        children: [
          <Fragment key="extract1">
            Carrefour est devenu le premier financeur de l’agriculture bio.
          </Fragment>,
        ],
      },
      {
        _type: "quote",
        _id: "quote2",
        children: ["“"],
      },
    ],
    banner: "Carrefour nous en parle",
    color: "blue",
    avatar: {
      name: "BENOÎT SOURY",
      description: "Directeur Proximité France et Marché Bio",
      srcProfile: "/assets/images/profile/benoit-soury.webp",
      altProfile: "benoit-soury",
      isIcon: false,
    },
    content: [
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            <strong>
              Que représente le bio pour Carrefour aujourd’hui&nbsp;?
              <br />
              Benoît Soury –{" "}
            </strong>
            Dans les pays où Carrefour est implanté, sa marque Carrefour Bio est
            en position de leader. En France, plus de 1&nbsp;000 produits sont
            référencés sous la marque Carrefour Bio, dont beaucoup sont
            français&nbsp;: fruits et légumes frais (hors exotiques et agrumes),
            laits, oeufs, viandes (porc, boeuf, veau, volaille).
            <br />
            <br />
            <strong>
              Quelle est la stratégie de Carrefour en matière de bio&nbsp;?
              <br />
              B. S. –{" "}
            </strong>
            Rappelons d’abord que l’engagement de Carrefour pour le bio et le
            bien manger fait de nous un pionnier, puisque la première référence
            bio, la fameuse boule de pain, remonte à 1992, et que la marque
            Carrefour Bio a été lancée en 1997. Le groupe est devenu le premier
            financeur de l’agriculture bio, via le fonds de transition agricole
            MiiMOSA*.
            <br />
            Grâce à un travail de terrain, nous avons accompagné des
            coopératives d’éleveurs pour développer une filière de lait bio
            d’origine française, des producteurs de riz de Camargue pour une
            filière de riz bio ou encore des producteurs de blé pour une filière
            de pâtes alimentaires bio. Le bio est un vecteur exemplaire pour
            resserrer nos liens avec les agriculteurs et les transformateurs, et
            aujourd’hui Carrefour accompagne plus de 4&nbsp;700 producteurs sur
            ces filières.
            <br />
            <br />
          </Fragment>,
        ],
      },
      {
        _type: "legend",
        _id: "legend1",
        children: [
          <Fragment key="legend-1">
            *MiiMOSA est une plateforme de financement participatif, présente en
            France et en Belgique, destinée à financer des projets d’agriculture
            et d’alimentation durables.
            <br />
            <br />
          </Fragment>,
        ],
      },
      {
        _type: "text",
        _id: "text2",
        children: [
          <Fragment key="text2">
            <strong>
              Comment Carrefour accompagne-t-il les producteurs qui souhaitent
              se convertir à l’agriculture bio&nbsp;?
              <br />
              B. S. –{" "}
            </strong>
            La conversion au bio prend plusieurs années, et les producteurs qui
            s’engagent dans le bio ou augmentent leurs surfaces cultivées en bio
            doivent avoir la certitude de trouver durablement des débouchés pour
            leurs produits. Nous les accompagnons donc dans la durée en leur
            offrant des engagements contractuels pluriannuels. De plus, la
            pluralité des partenaires est essentielle pour la résilience de la
            filière et nous veillons à ne pas être leur seul client, pour ne pas
            les mettre en situation de dépendance économique vis-à-vis de nous.
            <br />
            <br />
            <strong>
              Quelles solutions Carrefour met-il en oeuvre pour rendre les
              produits bio plus accessibles&nbsp;?
              <br />
              B. S. –{" "}
            </strong>
            L’accessibilité des produits bio, c’est le premier pilier de la
            relance d’Act For Food. Carrefour s’engage à faire de Carrefour Bio
            la marque la plus compétitive du marché. D’autre part, les
            détenteurs de la carte de fidélité Carrefour bénéficient déjà d’une
            remise de 10&nbsp;% sur les produits de la marque Carrefour Bio dans
            tous nos magasins, tous les jours, en activant la prime BIO proposée
            par Carrefour. En outre, les produits Carrefour Bio sont disponibles
            dans tous nos points de vente, hypermarchés, supermarchés Carrefour
            Market, magasins de proximité aux enseignes Carrefour City, Express,
            Contact, Montagne, et sur notre site Carrefour.fr. Enfin, nous
            sommes acteurs de la distribution spécialisée via un réseau de 130
            enseignes aux enseignes Bio c’ Bon et So.bio, ainsi que sur Internet
            via Greenweez.
            <br />
            <br />
            <br />
            <br />
          </Fragment>,
        ],
      },
    ],
  },
  {
    article: "INTERVIEW",
    extract: [
      {
        _type: "quote",
        _id: "quote1",
        children: ["“"],
      },
      {
        _type: "extract",
        _id: "extract1",
        children: [
          <Fragment key="extract1">
            Aucun producteur engagé dans la filière ne s’est désisté.
          </Fragment>,
        ],
      },
      {
        _type: "quote",
        _id: "quote2",
        children: ["“"],
      },
    ],
    banner: "La Filière Qualité Carrefour",
    color: "blue",
    avatar: {
      name: "FRANÇOIS VINCENT",
      description: "Directeur Produits frais traditionnels France",
      srcProfile: "/assets/images/profile/francois-vincent.webp",
      altProfile: "francois-vincent",
      isIcon: false,
    },
    content: [
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            <strong>
              En quoi consiste la Filière Qualité Carrefour&nbsp;?
              <br />
              François Vincent -{" "}
            </strong>
            C’est une démarche agricole qui fait travailler ensemble
            producteurs, clients et magasins pour proposer les meilleurs
            produits au meilleur prix. Les Filières Qualité Carrefour (FQC) ont
            été initiées en 1992 par Gabriel Binetti, Directeur des Produits
            frais. Aujourd’hui, en France, il en existe 132, avec plus de
            6&nbsp;500 producteurs partenaires. Elles rappellent le lien
            originel que nous avons perdu avec la Terre, en supprimant l’usage
            de certains pesticides et en respectant la saisonnalité. Aucun
            producteur engagé dans la filière ne s’est désisté.
            <br />
            <br />
            <strong>
              Comment travaillez-vous avec les producteurs&nbsp;?
              <br />
              F. V. -{" "}
            </strong>
            Nous leur demandons de suivre un plan de progrès, dont la
            philosophie tient en quelques mots&nbsp;: mieux produire pour le
            producteur et le client, les animaux et la planète. Nous travaillons
            avec eux le prix de revient des produits, qui doit les faire vivre.
            Nous aidons certains pionniers à tester de nouvelles variétés et
            nouvelles méthodes de culture. Et nous travaillons le bol
            alimentaire des animaux avec l’Institut national de recherche pour
            l’agriculture, l’alimentation et l’environnement pour obtenir le
            meilleur équilibre en graisses naturelles du marché.
            <br />
            <br />
            <strong>
              Comment s’assurer du respect des engagements par les
              producteurs&nbsp;?
              <br />
              F. V. -{" "}
            </strong>
            Nous contrôlons la conformité de leurs pratiques avec la
            réglementation et les exigences du cahier des charges FQC lors
            d’audits annuels. Quand le produit arrive dans nos entrepôts, nous
            vérifions ses qualités organoleptiques et d’autres variables, et
            nous testons son goût au cours de dégustations. Nos experts métier
            visitent régulièrement élevages et exploitations, pour estimer la
            production de l’année, et cette expertise donne toute sa richesse
            aux filières.
            <br />
            <br />
            <strong>
              Quels sont vos objectifs à l’horizon 2026&nbsp;?
              <br />
              F. V. -{" "}
            </strong>
            Nous voulons embarquer le plus de producteurs possible et améliorer
            le taux de pénétration des FQC dans le panier moyen. C’est à cette
            condition que nous réaliserons la raison d’être de Carrefour,
            définie par Alexandre Bompard&nbsp;: devenir leader de la transition
            alimentaire pour tous.
            <br />
            <br />
            <br />
            <br />
          </Fragment>,
        ],
      },
    ],
  },
  {
    article: "PORTRAIT",
    extract: [
      {
        _type: "quote",
        _id: "quote1",
        children: ["“"],
      },
      {
        _type: "extract",
        _id: "extract1",
        children: [
          <Fragment key="extract1">
            Nos pratiques en accord avec Carrefour renforcent la biodiversité
            <br />
            et respectent les cycles naturels...
          </Fragment>,
        ],
      },
      {
        _type: "quote",
        _id: "quote2",
        children: ["“"],
      },
    ],
    banner: "La Filière Qualité Carrefour",
    color: "red",
    avatar: {
      name: "Vincent CARRÈRE-LOUSTAUNAU",
      description: "Producteur et gérant des Vergers de Guillamou",
      srcProfile: "/assets/images/profile/vincent-carriere.webp",
      altProfile: "vincent-carrere",
      srcFruit: "/assets/images/profile/pomme.webp",
      altFruit: "pomme",
      isIcon: true,
    },
    content: [
      {
        _type: "title",
        _id: "title-1",
        children: [
          <Fragment key="title-1">
            Aux Vergers de Guillamou, des solutions naturelles pour améliorer le
            goût des pommes.
          </Fragment>,
        ],
        className: `col-start-1 col-12 ${stylesContent.title}`,
      },
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            <br />
            <br />
            Les amateurs le savent&nbsp;: parmi les facteurs qui donnent de la
            saveur à une pomme, il y a la couleur.{" "}
            <i>
              «&nbsp;Pour que les pommes soient bien colorées avant la
              cueillette, nous augmentons la luminosité en effeuillant les
              arbres à l’aide d’une machine
            </i>
            , remarque Vincent Carrère-Loustaunau, gérant des Vergers de
            Guillamou, dans le Lot-et-Garonne.{" "}
            <i>
              Mais pour optimiser les qualités organoleptiques* du fruit, nous
              agissons sur d’autres paramètres aussi essentiels, comme le choix
              des sols, le maintien des équilibres entre variétés, la taille des
              arbres, le nombre de fruits sur les branches, la gestion de
              l’eau…».
            </i>
            <br />
            Ces solutions font partie d’un éventail de pratiques agroécologiques
            mises en oeuvre par Vincent Carrère-Loustaunau pour renforcer la
            durabilité de l’exploitation et garantir la qualité des fruits. Dans
            son verger de pommiers d’une soixantaine d’hectares, il produit
            plusieurs variétés&nbsp;: Gala, Reine des Reinettes, Reinette grise
            du Canada, Granny Smith, Chanteclerc, Fuji…{" "}
            <i>
              «&nbsp;La cueillette de ces variétés est effectuée entre les mois
              d’août et de décembre. Grâce à ce panel de variétés, nous
              supportons mieux les aléas climatiques&nbsp;: un gel printanier
              peut éliminer les fleurs d’une variété, sans menacer les autres.»
            </i>
            <br />
            <br />
            <strong>MOINS D’EAU POUR PLUS DE SAVEURS</strong>
            <br />
            Vincent Carrère-Loustaunau applique d’autres techniques
            d’agroécologie pour irriguer et enrichir le sol naturellement.
            <br />{" "}
            <i>
              «&nbsp;Nous limitons l’apport d’eau en irriguant les arbres par
              microjet ou goutte à goutte. De cette façon, les fruits ne sont
              pas gorgés d’eau et conservent toute leur saveur.»
            </i>{" "}
            Les vergers sont taillés et les pelouses tondues deux fois par an.
            Branchages et herbes sont ensuite broyés et compostés pour produire
            de l’humus qui sert à enrichir le sol. L’exploitation des Vergers de
            Guillamou est partenaire de la Filière Qualité Carrefour depuis
            vingt ans.
            <br />{" "}
            <i>
              «&nbsp;Nous nous sommes engagés parce que notre sol présente
              toutes les qualités pour remplir les conditions du cahier des
              charges sans s’épuiser. Nos pratiques en accord avec Carrefour
              renforcent la biodiversité et respectent les cycles naturels,
              c’est essentiel pour transmettre des terres saines à nos
              descendants.»
            </i>
            <br />
            <br />
          </Fragment>,
        ],
      },
      {
        _type: "legend",
        _id: "legend-1",
        children: [
          <Fragment key="legend-1">
            * Le profil organoleptique d’un produit désigne l’ensemble de ses
            propriétés pouvant être perçues par les cinq sens (vue, toucher,
            odorat, ouïe, goût).
            <br />
            <br />
            <br />
            <br />
          </Fragment>,
        ],
      },
    ],
  },
  {
    article: "PORTRAIT",
    extract: [
      {
        _type: "quote",
        _id: "quote1",
        children: ["“"],
      },
      {
        _type: "extract",
        _id: "extract1",
        children: [
          <Fragment key="extract1">
            La société Allix a fait le choix de cultiver et de commercialiser
            des pommes de terre toujours fraîches pour conserver leur saveur.
          </Fragment>,
        ],
      },
      {
        _type: "quote",
        _id: "quote2",
        children: ["“"],
      },
    ],
    banner: "La Filière Qualité Carrefour",
    color: "yellow",
    avatar: {
      name: "SAMUEL ALLIX",
      description: "Producteur et gérant de la société Allix",
      srcProfile: "/assets/images/profile/samuel-allix.webp",
      altProfile: "samuel-allix",
      srcFruit: "/assets/images/profile/patate.webp",
      altFruit: "patate",
      isIcon: true,
    },
    content: [
      {
        _type: "title",
        _id: "title-1",
        children: [
          <Fragment key="title-1">
            Exploitation Allix&nbsp;: rotation des cultures et récoltes
            échelonnées pour des pommes de terre plus fraîches
          </Fragment>,
        ],
        className: `col-start-1 col-12 ${stylesContent.title}`,
      },
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            <br />
            <br />
            En 2024, le Sud-Ouest a subi une pluviométrie inhabituelle, avec
            pour conséquence l’apparition de mildiou, une maladie qui affecte
            certaines cultures en cas de forte humidité. Un vrai défi pour
            Samuel Allix, gérant de la société Allix, qui a dû prendre des
            précautions pour protéger ses cultures de pommes de terre.{" "}
            <i>
              «&nbsp;Nous avons choisi des variétés tolérantes au mildiou et
              adopté des stratégies d’hygiène autour des champs, en choisissant
              des sites qui ne risquaient pas d’être contaminés par d’autres
              parcelles&nbsp;»
            </i>
            , explique-t-il. Chaque année, il produit 11&nbsp;000 à 12&nbsp;000
            tonnes de pommes de terre sur son exploitation d’une soixantaine
            d’hectares, dont vingt cultivés en bio, et sur 150 autres hectares
            sous contrat de production avec ses voisins agriculteurs.{" "}
            <i>
              «&nbsp;Grâce à ce système, nous avons pu développer l’exploitation
              en évitant la lourde charge de l’acquisition foncière.»
            </i>{" "}
            Avantage de ce système de location de terre&nbsp;: il facilite la
            rotation des cultures, un principe ancestral remis au goût du jour
            depuis une quinzaine d’années, qui laisse la terre se reposer entre
            deux cultures.{" "}
            <i>
              «&nbsp;Sur les parcelles des voisins, nous plantons des pommes de
              terre une fois tous les six ans. D’autres cultures sont plantées
              les autres années.»
            </i>
            <br />
            <br />
            <strong>Le choix du goût et de la fraîcheur</strong>
            <br />
            La société Allix a fait le choix de cultiver et de commercialiser
            des pommes de terre toujours fraîches pour conserver leur saveur.{" "}
            <i>
              «&nbsp;Nous échelonnons les récoltes tout au long de l’année,
              depuis les premières au mois de juin jusqu’aux dernières fin
              mars-début avril, et nous ne stockons aucun produit dans des
              frigos.»
            </i>{" "}
            Samuel Allix choisit des variétés comme Tentation et Otolia, pour
            les cultiver sans pesticides de synthèse dès la levée, avec des
            méthodes de protection basées sur la nature et autorisées par le
            cahier des charges de la Filière Qualité Carrefour, dont il est
            partenaire depuis treize ans.{" "}
            <i>
              «&nbsp;C’est un objectif difficile à atteindre, l’année qui vient
              de s’écouler nous l’a montré, mais on y arrive en combinant toutes
              les techniques de l’agroécologie à notre disposition, parmi
              lesquelles le choix des bonnes variétés. Ces variétés, nous
              devrons les faire évoluer rapidement pour les rendre toujours plus
              résistantes aux conditions changeantes.»
            </i>
            <br />
            <br />
            <br />
            <br />
          </Fragment>,
        ],
      },
    ],
  },
];
