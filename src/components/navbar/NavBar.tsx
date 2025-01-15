import Link from "next/link";
import { useAppContext } from "../context/useAppContext";
import styles from "./navBar.module.scss";
import ExportedPicture from "../templateComponent/ExportedPicture";
import TransitionLink from "../layout/TransitionLink";

export default function NavBar() {
  const { setIsOpen } = useAppContext();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.lists}>
        <li className={styles.list}>
          <TransitionLink  href="/" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="!w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/0.png"
                priority={true}
              />
              <p className="font-bitter text-[13px]">
                L’Oréal&nbsp;Groupe, la&nbsp;beauté&nbsp;créatrice
              </p>
            </div>
          </TransitionLink>
        </li>
        <h3 className="font-roboto text-[18px] xs:text-[20px] uppercase">Les forces de la beauté</h3>
        <li className={styles.list}>
          <TransitionLink  href="/la-beaute-nous-rappelle-a-nous-memes" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="!w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/1.png"
                priority={true}
              />
              <p className="font-bitter italic text-[13px]">
                «&nbsp;La beauté est multiple, mais l’émotion du beau est universelle.&nbsp;»
              </p>
            </div>
          </TransitionLink>
        </li>
        <li className={styles.list}>
          <TransitionLink  href="/emmaus-solidarite-et-loreal" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="!w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/2.png"
                priority={true}
              />
              <p className="font-bitter text-[13px]">
                EMMAÜS Solidarité et L’Oréal : quand la beauté nous relie
              </p>
            </div>
          </TransitionLink>
        </li>
        <li className={styles.list}>
          <TransitionLink  href="/jai-compris-que-javais-droit-a-ma-beaute" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="!w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/3.png"
                priority={true}
              />
              <p className="font-bitter italic text-[13px]">
                «&nbsp;J’ai compris que j’avais droit à ma beauté »
              </p>
            </div>
          </TransitionLink>
        </li>
        <h3 className="font-roboto text-[18px] xs:text-[20px] uppercase">La beauté, de la nature au flacon</h3>
        <li className={styles.list}>
          <TransitionLink  href="/les-sciences-vertes-ou-quand-la-beaute-s-inspire-de-la-nature" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="!w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/4.png"
                priority={true}
              />
              <p className="font-bitter text-[13px]">
                Investir dans les Sciences Vertes pour la transformation durable
              </p>
            </div>
          </TransitionLink>
        </li>
        <li className={styles.list}>
          <TransitionLink  href="/emballages-une-question-de-ressources" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="!w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/5.png"
                priority={true}
              />
              <p className="font-bitter text-[13px]">
                Plus circulaire, innovant et allégé : l’emballage fait sa mue
              </p>
            </div>
          </TransitionLink>
        </li>
        <h3 className="font-roboto text-[18px] xs:text-[20px] uppercase">La beauté de demain</h3>
        <li className={styles.list}>
          <TransitionLink  href="/innovante-inclusive-et-plus-responsable" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="!w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/6.png"
                priority={true}
              />
              <p className="font-bitter italic text-[13px]">
                «&nbsp;Innovante, inclusive et plus responsable : nous sommes fiers de notre usine.&nbsp;»
              </p>
            </div>
          </TransitionLink>
        </li>
        <li className={styles.list}>
          <TransitionLink  href="/beaute-augmentee-et-quete-humanite" onClick={handleLinkClick}>
            <div className="flex gap-[12px] items-center">
              <ExportedPicture
                className="!w-[32px] h-auto max-w-[unset]"
                alt="Luxe"
                src="/assets/images/menu/7.png"
                priority={true}
              />
              <p className="font-bitter text-[13px]">
                Beauté augmentée et quête d’humanité
              </p>
            </div>
          </TransitionLink>
        </li>
      </ul>
    </nav>
  );
}
