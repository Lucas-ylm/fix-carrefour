"use client";
import { useEffect } from "react";
import styles from "./ads.module.scss";

type AdsSize =
  | "banniere_basse_320x50"
  | "banniere_basse_468x60"
  | "banniere_basse_728x90"
  | "banniere_basse_1000x90"
  | "banniere_haute_320x50"
  | "banniere_haute_468x60"
  | "banniere_haute_728x90"
  | "banniere_haute_970x250"
  | "banniere_haute_1000x90"
  | "banniere_haute_1000x200"
  | "banniere_haute_1000x300"
  | "banniere_haute_1000x350"
  | "banniere_haute_1000x400"
  | "banniere_haute_1000x450"
  | "banniere_haute_1000x500"
  | "inread_300x250"
  | "inread_top_300x250"
  | "pave_bas_300x250"
  | "pave_haut_160x600"
  | "pave_haut_300x250"
  | "pave_haut_300x600"
  | "pave_milieu_160x600"
  | "pave_milieu_300x250"
  | "pave_milieu_300x600";

type Props = {
  id: string;
  className?: string;
  style?: React.CSSProperties;
  size: AdsSize;
};

export default function Ads({ id, style, size, className }: Props) {
  useEffect(() => {
    if (window.googletag && window.googletag.cmd) {
      window.googletag.cmd.push(function () {
        window.googletag.display(id);
        window.googletag.pubads().refresh();
      });
    }
  }, [id]);

  return (
    <div id={id} className={`${className} ${styles.wrapper}`}>
      <div id={id} className={styles.ads} style={style} data-size={size} />
    </div>
  );
}
