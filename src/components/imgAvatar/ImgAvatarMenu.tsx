import ExportedPicture from "../templateComponent/ExportedPicture";
import styles from "./imgAvatarMenu.module.scss";

type Props = {
  srcProfile: string;
  altProfile: string;
  srcFruit?: string;
  altFruit?: string;
  className: string;
};

export default function ImgAvatarMenu({
  srcProfile,
  altProfile,
  srcFruit,
  altFruit,
  className,
}: Props) {
  return (
    <div className={`${className} ${styles.wrapper}`}>
      <div className={styles.container}>
        <ExportedPicture
          src={srcProfile}
          alt={altProfile}
          className={styles.image}
          width={340}
          height={340}
        />
        {srcFruit && (
          <ExportedPicture
            src={srcFruit ?? ""}
            alt={altFruit ?? ""}
            className={styles.fruit}
            width={340}
            height={340}
          />
        )}
      </div>
    </div>
  );
}
