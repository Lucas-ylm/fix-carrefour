import { TypeProps } from "../avatar/Avatar";
import styles from "./description.module.scss";

type Props = { description: string; type: TypeProps };

export default function Description({ description, type }: Props) {
  return (
    <p className={styles.description} data-type={type}>
      {description}
    </p>
  );
}
