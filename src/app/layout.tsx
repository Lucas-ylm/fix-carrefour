import { ContextProvider } from "@/components/context/Context";
import LazySvg from "@/components/svgComponent/LazySvg";
import ATInternet from "@/components/templateComponent/ATInternet";
import Header from "@/components/templateComponent/Header";
import { env } from "@/lib/env";
import { Metadata } from "next";
import { Arimo } from "next/font/google";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.scss";

const arimo = Arimo({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
});

const redditItalic = localFont({
  src: "./fonts/RedditSans-Italic-VariableFont_wght.ttf",
  variable: "--font-reddit-italic",
  weight: "300 800",
});
const redditNormal = localFont({
  src: "./fonts/RedditSans-VariableFont_wght.ttf",
  variable: "--font-reddit-normal",
  weight: "300 800",
});

export const metadata: Metadata = {
  metadataBase: new URL(env.BASE_URL),
  title: {
    template: "%s | Le Monde",
    default: "Carrefour | Le Monde",
  },
  description:
    "« Être attentif au contenu de son assiette a un impact direct sur la santé, des femmes et des hommes, mais aussi des animaux et sur toutes les composantes de l’environnement, l’eau, l’air et les sols.",
  icons: [
    {
      rel: "icon",
      url: `${env.BASE_PATH}/favicon.png`,
    },
  ],
  openGraph: {
    type: "website",
    url: "https://www.lemonde.fr",
    title: "Manger mieux : tous à table pour le changement !",
    description:
      "« Être attentif au contenu de son assiette a un impact direct sur la santé, des femmes et des hommes, mais aussi des animaux et sur toutes les composantes de l’environnement, l’eau, l’air et les sols.",
    siteName: "Carrefour",
    images: [
      {
        url: `${env.BASE_PATH}/og/og-opengraph.webp`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@lemondefr",
    creator: "@matt_ojs",
    images: `${env.BASE_PATH}/og/og-twitter.webp`,
    title: "Manger mieux : tous à table pour le changement !",
    description:
      "« Être attentif au contenu de son assiette a un impact direct sur la santé, des femmes et des hommes, mais aussi des animaux et sur toutes les composantes de l’environnement, l’eau, l’air et les sols.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${arimo.variable} ${redditItalic.variable} ${redditNormal.variable}`}
      >
        <ContextProvider>
          <Header
            logoBrand={
              <a
                href="https://www.carrefour.fr"
                target="_blank"
                rel="noreferrer"
                style={{ display: "flex", gap: "1rem" }}
              >
                <LazySvg name="carrefour" width={24} height={24} />
              </a>
            }
            isMenu={true}
          />
          <Script
            id="google-ads"
            strategy="afterInteractive"
            src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
          />

          <Script id="google-ads-init" strategy="afterInteractive">
            {`
          window.googletag = window.googletag || {cmd: []};
          googletag.cmd.push(function() {
            if (window.innerWidth > 1024) {
              // Configuration pour écran large
              googletag.defineSlot('/128139881/LM_lemonde/ope_spe/ope_spe/rg/banniere_haut', [[970, 250]], 'div-gpt-ad-1729257135244-0')
              .addService(googletag.pubads())
              .setTargeting("rubriques", "tous-a-table-pour-le-changement")
              .setTargeting("rub", "tous-a-table-pour-le-changement");
              } else {
                // Configuration pour écran étroit
              googletag.defineSlot('/128139881/LM_lemonde/ope_spe/ope_spe/rg/banniere_basse', [[320, 50]], 'div-gpt-ad-1729257024685-0')
              .addService(googletag.pubads())
              .setTargeting("rubriques", "tous-a-table-pour-le-changement")
              .setTargeting("rub", "tous-a-table-pour-le-changement");
              }
              
              googletag.pubads().enableSingleRequest();
              googletag.enableServices();
              });
              `}
          </Script>
          {children}
          <Script src="https://cmp.lemonde.fr/js/tcfv2-stub.min.js"></Script>
          <Script async src="https://cmp.lemonde.fr/js/lemonde.min.js"></Script>
          <ATInternet
            chapter1="tous-a-table-pour-le-changement"
            chapter2="tous-a-table-pour-le-changement.lemonde.fr"
          />
        </ContextProvider>
      </body>
    </html>
  );
}
