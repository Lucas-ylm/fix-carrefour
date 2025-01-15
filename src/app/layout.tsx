import Header from "@/components/templateComponent/Header";
import { env } from "@/lib/env";
import "@/styles/globals.scss";
import type { Metadata } from "next";
import { Bitter, Roboto } from "next/font/google";
import Script from "next/script";
// import Cookies from "@/components/templateComponent/Cookies";
import LazySvg from "@/components/svgComponent/LazySvg";
import ATInternet from "@/components/templateComponent/ATInternet";
import styles from "./layout.module.scss";
import { ContextProvider } from "@/components/context/Context";
import { TransitionProvider } from "../components/context/TransitionContext";
import Transition from "../components/Transition/index";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const bitter = Bitter({
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-bitter",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.BASE_URL),
  title: {
    template: "%s | Le Monde",
    default: "L'Oréal Groupe, la beauté créatrice | Le Monde",
  },
  description: "« Créer la beauté qui fait avancer le monde », telle est la raison d’être de L’Oréal.",
  icons: [
    {
      rel: "icon",
      url: `${env.BASE_PATH}/favicon.png`,
    },
  ],
  openGraph: {
    type: "website",
    url: "https://www.lemonde.fr",
    title: "L'Oréal Groupe, la beauté créatrice | Le Monde",
    description: "« Créer la beauté qui fait avancer le monde », telle est la raison d’être de L’Oréal.",
    siteName: "M Publicité",
    images: [
      {
        url: `${env.BASE_PATH}/og/loreal-opengraph.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lemondefr",
    creator: "@ionaoui",
    images: `${env.BASE_PATH}/og/loreal-twitter.png`,
    title: "L'Oréal Groupe, la beauté créatrice | Le Monde",
    description: "« Créer la beauté qui fait avancer le monde », telle est la raison d’être de L’Oréal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TransitionProvider>
      <html lang="fr">
        <body className={`${roboto.variable} ${bitter.variable}`}>
          <ContextProvider>
            <Header
              logoBrand={
                <a href="https://www.loreal.com/fr/" target="_blank" rel="noreferrer">
                  <LazySvg name="loreal-groupe" width={90} height={58} />
                </a>
              }
              isMenu={true}
            />
            <Transition>
              <main className={styles.main}>{children}</main>
            </Transition>
            <Script src="https://cmp.lemonde.fr/js/tcfv2-stub.min.js"></Script>
            <Script async src="https://cmp.lemonde.fr/js/lemonde.min.js"></Script>
            <ATInternet chapter1="la-beaute-creatrice" chapter2="la-beaute-creatrice.lemonde.fr" />
          </ContextProvider>
        </body>
      </html>
    </TransitionProvider>
  );
}
