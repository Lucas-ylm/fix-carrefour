import { BlockItem } from "@/components/block/Block";
import { Fragment } from "react";
import styles from "./data.module.scss";

export const intro: BlockItem[] = [
  {
    _type: "text",
    _id: "text1",
    children: [
      <Fragment key="text1">
        Avec le deuxième chapitre d&apos;Act For Food, Carrefour renouvelle ses
        engagements en faveur de la transition alimentaire pour tous autour de{" "}
        <strong>6&nbsp;priorités</strong>.
      </Fragment>,
    ],
  },
];

export const kpis: {
  title: BlockItem[];
  isNumber: boolean;
  number: { text?: string; number: string }[];
  text: BlockItem[];
  color: string;
  isImage: boolean;
  image?: string;
  className: string;
}[] = [
  {
    title: [
      {
        _type: "card",
        _id: "card1",
        children: [
          <Fragment key="card1">
            <br />
            Proposer la marque bio la moins chère du marché
          </Fragment>,
        ],
      },
    ],
    isNumber: true,
    number: [{ number: "15%" }],
    text: [
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            des ventes de produits frais issus de l&apos;agriculture bio ou de
            l&apos;agroécologie.
          </Fragment>,
        ],
      },
    ],
    color: "green",
    isImage: false,
    className: `col-m-start-5 col-m-3 ${styles.col}`,
  },
  {
    title: [
      {
        _type: "card",
        _id: "card1",
        children: [
          <Fragment key="card1">
            <br />
            Concilier partenariats avec le monde agricole et petits prix
            <br />
          </Fragment>,
        ],
      },
    ],
    isNumber: true,
    number: [
      // { text: "Partenariats avec", number: "50000" },
      {
        // text: "Producteurs, dont",
        number: "30 000",
      },
    ],
    text: [
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            producteurs partenaires en France pour proposer des produits de
            saison savoureux et accessibles.
          </Fragment>,
        ],
      },
    ],
    color: "orange",
    isImage: false,
    className: `col-m-start-8 col-m-3 ${styles.col}`,
  },
  {
    title: [
      {
        _type: "card",
        _id: "card1",
        children: [
          <Fragment key="card1">
            <br />
            PROMOUVOIR LES PRODUITS FRANÇAIS OU ISSUS D&apos;UNE FABRICATION
            LOCALE
          </Fragment>,
        ],
      },
    ],
    isNumber: true,
    number: [{ number: "x2" }],
    text: [
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            Renforcement des marques locales et doublement des
            approvisionnements issus de circuits ultra-courts.
          </Fragment>,
        ],
      },
    ],
    color: "darkgreen",
    isImage: false,
    className: `col-m-start-11 col-m-3 ${styles.col}`,
  },
  {
    title: [
      {
        _type: "card",
        _id: "card1",
        children: [
          <Fragment key="card1">
            <br />
            Accélérer nos engagements pour le climat et la biodiversité
          </Fragment>,
        ],
      },
    ],

    isNumber: true,
    number: [
      {
        text: "des poissons Carrefour vendus issus de la pêche durable.",
        number: "50%",
      },
      {
        text: "des déchets valorisés en magasin d'ici 2025.",
        number: "100%",
      },
    ],
    text: [
      {
        _type: "text",
        _id: "text1",
        children: [
          // <Fragment key="text1">
          //   des déchets valorisés en magasin d&apos;ici 2025.
          //   <br />
          //   <br />
          // </Fragment>,
        ],
      },
    ],
    color: "blue",
    isImage: true,
    image: "/assets/images/kpi/fish.webp",
    className: `col-m-start-5 col-m-3 ${styles.special}`,
  },
  {
    title: [
      {
        _type: "card",
        _id: "card1",
        children: [
          <Fragment key="card1">
            <br />
            DEVENIR LE LEADER DES RÉGIMES SPÉCIFIQUES
          </Fragment>,
        ],
      },
    ],
    isNumber: false,
    number: [],
    text: [
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            <br />
            Devenir le leader sur le marché végétarien et de la santé
            alimentaire d&apos;ici 2026.
          </Fragment>,
        ],
      },
    ],
    color: "green",
    isImage: false,
    className: `col-m-start-8 col-m-3 ${styles.col}`,
  },
  {
    title: [
      {
        _type: "card",
        _id: "card1",
        children: [
          <Fragment key="card1">
            <br />
            Positionner la marque Carrefour sur le meilleur rapport
            «&nbsp;bénéfice pour la santé, goût et petit prix&nbsp;» du marché
            <br />
          </Fragment>,
        ],
      },
    ],
    isNumber: false,
    number: [],
    text: [
      {
        _type: "text",
        _id: "text1",
        children: [
          <Fragment key="text1">
            <br />
            Chaque produit qui récoltera une note inférieure à 4/5 verra sa
            recette reformulée.
          </Fragment>,
        ],
      },
    ],
    color: "orange",
    isImage: false,
    className: `col-m-start-11 col-m-3 ${styles.col}`,
  },
];
