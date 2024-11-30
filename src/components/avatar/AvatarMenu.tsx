import Description from "../description/Description";
import ImgAvatarMenu from "../imgAvatar/ImgAvatarMenu";
import Name from "../name/Name";
import { TypeProps } from "./Avatar";
import styles from "./avatar.module.scss";

type Props = {
  srcProfile: string;
  altProfile: string;
  srcFruit: string;
  altFruit: string;
  name: string;
  description: string;
  className?: string;
  type: TypeProps;
};

export default function AvatarMenu({
  srcProfile,
  altProfile,
  srcFruit,
  altFruit,
  name,
  description,
  className,
  type,
}: Props) {
  return (
    <div className={`${styles.wrapper} ${className}`} data-type={type}>
      <div className={styles.container}>
        <ImgAvatarMenu
          srcProfile={srcProfile}
          altProfile={altProfile}
          srcFruit={srcFruit}
          altFruit={altFruit}
          className={styles.avatar}
        />

        <div className={styles.content}>
          <Name name={name} type={type} />
          <Description description={description} type={type} />
        </div>
      </div>
    </div>
  );
}
