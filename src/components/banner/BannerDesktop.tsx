import { ColorBanner } from "./Banner";
import styles from "./bannerDesktop.module.scss";

type Props = {
  color: ColorBanner;
  content: string;
  id?: string;
};

export default function BannerDesktop({ color, content, id }: Props) {
  return (
    <div className={styles.wrapper} data-color={color} id={id}>
      <p className={styles.content}>{content}</p>
    </div>
  );
}
