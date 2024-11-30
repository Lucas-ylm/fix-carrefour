import Article from "../article/Article";
import Description from "../description/Description";
import Name from "../name/Name";
import ExportedPicture from "../templateComponent/ExportedPicture";
import styles from "./avatar.module.scss";

export type TypeProps = "menu" | "mobile" | "desktop";
export type ColorProps = "blue" | "red" | "yellow";

type Props = {
  srcProfile: string;
  altProfile: string;
  name: string;
  description: string;
  className?: string;
  article?: string;
  color?: ColorProps;
  isMenu?: boolean;
  type: TypeProps;
};

export default function Avatar({
  srcProfile,
  altProfile,
  name,
  description,
  className,
  article,
  color,
  isMenu = true,
  type,
}: Props) {
  return (
    <div className={`${styles.wrapper} ${className}`} data-type={type}>
      <div className={styles.container}>
        <ExportedPicture
          src={srcProfile}
          alt={altProfile}
          width={100}
          height={100}
          className={styles.avatar}
        />
        <div className={styles.content}>
          {isMenu && <Article article={article ?? ""} color={color ?? ""} />}
          <Name name={name} type={type} />
          <Description description={description} type={type} />
        </div>
      </div>
    </div>
  );
}
