import Article from "../article/Article";
import Description from "../description/Description";
import ImgAvatar from "../imgAvatar/ImgAvatar";
import Name from "../name/Name";
import { ColorProps, TypeProps } from "./Avatar";
import styles from "./avatar.module.scss";

type Props = {
  srcProfile: string;
  altProfile: string;
  srcFruit: string;
  altFruit: string;
  name: string;
  description: string;
  className?: string;
  article?: string;
  color: ColorProps;
  type: TypeProps;
  observer: boolean;
};

export default function Avatars({
  srcProfile,
  altProfile,
  srcFruit,
  altFruit,
  name,
  description,
  className,
  article,
  color,
  type,
  observer,
}: Props) {
  return (
    <div className={`${styles.wrapper} ${className}`} data-type={type}>
      <div className={styles.container}>
        <ImgAvatar
          srcProfile={srcProfile}
          altProfile={altProfile}
          srcFruit={srcFruit}
          altFruit={altFruit}
          color={color}
          isAnimated={observer}
        />

        <div className={styles.content}>
          <Article article={article ?? ""} color={color ?? ""} />
          <Name name={name} type={type} />
          <Description description={description} type={type} />{" "}
        </div>
      </div>
    </div>
  );
}
