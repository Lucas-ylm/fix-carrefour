import { TypeProps } from "../avatar/Avatar";
import styles from "./name.module.scss";
type Props = { name: string; type: TypeProps };

export default function Name({ name, type }: Props) {
  return (
    <p className={styles.name} data-type={type}>
      {name}
    </p>
  );
}
