import { useWindowSize } from "@/hook/useWindowSize";
import Link from "next/link";
import { useCallback } from "react";
import AvatarMenu from "../avatar/AvatarMenu";
import { useAppContext } from "../context/useAppContext";
import styles from "./navBar.module.scss";

export default function NavBar() {
  const { width } = useWindowSize();
  const { setIsOpen } = useAppContext();
  const handleClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      target: string,
      offset: number
    ) => {
      e.preventDefault();
      const element = document.querySelector(target);
      if (element) {
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition + offset,
        });
      }
      setIsOpen(false);
    },
    [setIsOpen]
  );

  return (
    <nav className={styles.wrapper}>
      <ul className={styles.lists}>
        <h3 className={styles.title}>L’Engagement Act For Food</h3>
        <li className={styles.list}>
          <Link
            href="#anchor_5"
            onClick={(e) => handleClick(e, "#anchor_5", -100)}
          >
            <AvatarMenu
              srcProfile="/assets/images/act-for-food.png"
              altProfile="act-for-food"
              name=""
              description="Les engagements de Carrefour en faveur du « mieux manger »"
              type="menu"
              srcFruit={""}
              altFruit={""}
            />
          </Link>
        </li>
        <h3 className={styles.title}>Carrefour nous en parle</h3>
        <li className={styles.list}>
          <Link
            href="#anchor_0"
            onClick={(e) =>
              handleClick(
                e,
                `#anchor_${width < 1024 ? 0 : 9}`,
                width < 1024 ? -350 : -100
              )
            }
          >
            <AvatarMenu
              srcProfile="/assets/images/profile/caroline-dassie.webp"
              altProfile="caroline-dassie"
              name="Caroline Dassié"
              description="Directrice Exécutive Global Marketing, Clients et Marques Propres"
              type="menu"
              srcFruit={""}
              altFruit={""}
            />
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            href="#anchor_1"
            onClick={(e) =>
              handleClick(
                e,
                `#anchor_${width < 1024 ? 1 : 10}`,
                width < 1024 ? -350 : -100
              )
            }
          >
            <AvatarMenu
              srcProfile="/assets/images/profile/benoit-soury.webp"
              altProfile="benoit-soury"
              name="Benoît Soury"
              description="Directeur Proximité France et Marché Bio"
              type="menu"
              srcFruit={""}
              altFruit={""}
            />
          </Link>
        </li>
        <h3 className={styles.title}>La Filière Qualité Carrefour</h3>
        <li className={styles.list}>
          <Link
            href="#anchor_2"
            onClick={(e) =>
              handleClick(
                e,
                `#anchor_${width < 1024 ? 2 : 6}`,
                width < 1024 ? -350 : -225
              )
            }
          >
            <AvatarMenu
              srcProfile="/assets/images/profile/francois-vincent.webp"
              altProfile="francois-vincent"
              name="Francois Vincent"
              description="Directeur Produits frais traditionnels France"
              type="menu"
              srcFruit={""}
              altFruit={""}
            />
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            href="#anchor_3"
            onClick={(e) =>
              handleClick(
                e,
                `#anchor_${width < 1024 ? 3 : 7}`,
                width < 1024 ? -350 : -225
              )
            }
          >
            <AvatarMenu
              srcProfile="/assets/images/profile/vincent-carriere.webp"
              altProfile="vincent-carriere"
              name="VINCENT CARRÈRE-LOUSTAUNAU"
              description="Producteur et gérant des Vergers de Guillamou"
              type="menu"
              srcFruit="/assets/images/profile/pomme.webp"
              altFruit="pomme"
            />
          </Link>
        </li>
        <li className={styles.list}>
          <Link
            href="#anchor_4"
            onClick={(e) =>
              handleClick(
                e,
                `#anchor_${width < 1024 ? 4 : 8}`,
                width < 1024 ? -375 : -225
              )
            }
          >
            <AvatarMenu
              srcProfile="/assets/images/profile/samuel-allix.webp"
              altProfile="samuel-allix"
              name="Samuel Allix"
              description="Producteur et gérant de la société Allix"
              type="menu"
              srcFruit="/assets/images/profile/patate.webp"
              altFruit="patate"
            />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
