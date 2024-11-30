import { useWindowSize } from "@/hook/useWindowSize";
import Block, { BlockItem } from "../block/Block";
import ExportedPicture from "../templateComponent/ExportedPicture";
import styles from "./kpi.module.scss";

type Props = {
  title: BlockItem[];
  isNumber: boolean;
  numbers: { text?: string; number: string }[];
  text: BlockItem[];
  color: string;
  isImage: boolean;
  src?: string;
};

export default function Kpi({
  title,
  isNumber,
  numbers,
  text,
  color,
  isImage,
  src,
}: Props) {
  const { width } = useWindowSize();
  return (
    <div className={styles.wrapper} data-color={color}>
      <Block blocks={title} className={styles.title} />

      <div className={styles.decoration}>
        {isImage && (
          <div className={styles.image}>
            <ExportedPicture
              src={src ?? ""}
              alt="fish"
              width={284}
              height={164}
            />
          </div>
        )}
        {isNumber && (
          <div className={styles.content}>
            {numbers.map((number, index) => (
              <div className={styles.container} key={index}>
                <p className={styles.text} data-color={color}>
                  {number.text}
                </p>
                <p className={styles.number} data-color={color}>
                  {number.number}
                </p>
              </div>
            ))}
          </div>
        )}
        {width < 1024 && isImage && (
          <div className={styles.image}>
            <ExportedPicture
              src={src ?? ""}
              alt="fish"
              width={284}
              height={164}
            />
          </div>
        )}
      </div>
      <Block blocks={text} className={styles.mainText} />
    </div>
  );
}
