import styles from "./article.module.scss";
type Props = {
  article: string;
  color: string;
};

export default function Article({ article, color }: Props) {
  return (
    <div className={styles.title}>
      <p className={styles.article} data-color={color}>
        {article}
      </p>
    </div>
  );
}
