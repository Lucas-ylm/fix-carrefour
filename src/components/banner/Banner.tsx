import styles from "./banner.module.scss";

export type ColorBanner = "green" | "blue";

type Props = {
  color: ColorBanner;
  content: string;
  id?: string;
  type?: string;
  className?: string;
};

export default function Banner({ color, content, id, type, className }: Props) {
  return (
    <div
      className={`${className} ${styles.wrapper}`}
      data-color={color}
      data-type={type ?? ""}
      id={id}
    >
      <p className={styles.content}>{content}</p>
    </div>
  );
}
