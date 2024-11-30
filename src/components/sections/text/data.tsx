import { BlockItem } from "@/components/block/Block";
import ExportedPicture from "@/components/templateComponent/ExportedPicture";
import { Fragment } from "react";
import styles from "./data.module.scss";

export const section1: BlockItem[] = [
  {
    _type: "chapo",
    _id: "chapo-1",
    children: [
      <Fragment key="chapo-1">
        Être attentif au contenu de son assiette a un impact direct sur la
        santé, des femmes et des hommes, mais aussi des animaux et sur toutes
        les composantes de l’environnement, l’eau, l’air et les sols. Conscient
        de son rôle crucial au coeur de la distribution alimentaire, Carrefour
        s’est donné pour mission de devenir le leader mondial de{" "}
        <i>«la transition alimentaire pour tous».</i>
        <br />
        <br />
      </Fragment>,
    ],
    className: styles.chapo,
  },
  {
    _type: "text",
    _id: "text-1",
    children: [
      <Fragment key="text-1">
        Depuis six ans, le programme Act For Food* incarne cette raison d’être.
        Le premier chapitre a permis à Carrefour de devenir leader du bio et
        d’être pionnier, entre autres, sur le bien-être animal. Aujourd’hui, le
        groupe ouvre un deuxième chapitre d’Act For Food pour{" "}
        <i>
          «donner l’envie aux Français de consommer et d’être un moteur
          d’optimisme»
        </i>
        , rappelle Alexandre Bompard, Président-Directeur général du groupe
        Carrefour. Il affiche six nouvelles priorités, parmi lesquelles :
        proposer la marque bio la moins chère du marché, promouvoir les produits
        français locaux et devenir leader du végétal et des régimes spécifiques.
        Avec ces engagements ambitieux, Carrefour veut renforcer ses liens avec
        les consommateurs, en leur proposant des produits plus savoureux, plus
        variés et plus sains, à des prix accessibles au plus grand nombre.
        <br />
        <br />
      </Fragment>,
    ],
    className: styles.text,
  },
  {
    _type: "legend",
    _id: "legend-1",
    children: [
      <Fragment key="legend-1">
        *ACT FOR FOOD&nbsp;: DES ACTIONS CONCRÈTES POUR MIEUX MANGER
      </Fragment>,
    ],
    className: styles.legend,
  },
  {
    _type: "title",
    _id: "title-2",
    children: [
      <Fragment key="title-2">
        En relançant son programme Act For Food, Carrefour veut accélérer la
        transition alimentaire pour tous
        <br />
        <br />
      </Fragment>,
    ],
    className: styles.title,
  },
  {
    _type: "text",
    _id: "text-2",
    children: [
      <Fragment key="text-2">
        En matière d’alimentation, les Français veulent consommer des produits
        sains et naturels. C’était vrai en 2018, lorsque Carrefour a lancé Act
        For Food, un programme d’actions concrètes pour accompagner la
        transition alimentaire, ça l’est encore plus en 2024. Mais le contexte a
        changé, comme le rappelle Caroline Dassié, Directrice Exécutive Global
        Marketing, Clients et Marques Propres&nbsp;: les études de consommation
        montrent que le premier critère d’achat est le goût et le plaisir, et
        les consommateurs portent une attention croissante au respect de
        l’environnement et au bien-être animal, qui se reflète dans leurs
        achats. Pour tenir compte de ces nouvelles attentes, Carrefour actualise
        son programme Act For Food cet automne. Il peut notamment s’appuyer sur
        la marque Carrefour Bio, leader du marché, pour accroître la part des
        produits bio dans le panier moyen de ses clients, explique Benoît Soury,
        Directeur Proximité France et Marché Bio.
      </Fragment>,
    ],
    className: styles.text,
  },
];

export const section2: BlockItem[] = [
  {
    _type: "title",
    _id: "title-1",
    children: [
      <Fragment key="title-1">
        <div className={styles.decoration}>
          <ExportedPicture
            src="/assets/images/feuille.webp"
            alt="logo-article"
            width={103}
            height={77}
            className={styles.image}
          />
        </div>
        <Fragment>
          <br />
          Changer durablement notre alimentation grâce à des pratiques
          agricoles plus respectueuses de l’environnement
          <br />
          <br />
        </Fragment>
      </Fragment>,
    ],
    className: `col-start-2 col-10 ${styles.titleCenter}`,
  },
  {
    _type: "text",
    _id: "text-2",
    children: [
      <Fragment key="text-2">
        Rotation des cultures, choix de variétés résistantes, utilisation de
        biostimulants… ces pratiques font partie d’un éventail de solutions
        agroécologiques mises en œuvre par des producteurs qui ont fait le choix
        de produire des fruits et légumes plus savoureux et plus respectueux de
        la santé des consommateurs et de l’environnement. Ces agriculteurs
        engagés jouent un rôle essentiel dans la transition alimentaire pour
        tous et le «&nbsp;mieux manger&nbsp;». La marque Filière Qualité
        Carrefour leur apporte un soutien dans la durée, rappelle François
        Vincent, Directeur Produits frais traditionnels France.
      </Fragment>,
    ],
    className: `col-start-2 col-10 ${styles.textCenter}`,
  },
];
