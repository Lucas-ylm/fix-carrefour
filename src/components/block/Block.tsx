import { forwardRef } from "react";
import styles from "./block.module.scss";

export type Item =
  | "slogan"
  | "title"
  | "subtitle"
  | "chapo"
  | "text"
  | "quote"
  | "extract"
  | "legend"
  | "card";

export type BlockItem = {
  _type?: Item;
  _id: string;
  children: React.ReactNode[];
  className?: string;
};

export type Props = {
  blocks: BlockItem[] | undefined;
  className?: string;
};

function BlockRenderer({ block }: { block: BlockItem }) {
  const { _type, children } = block;

  switch (_type) {
    case "slogan":
      return <h1 className={styles.slogan}>{children}</h1>;
    case "title":
      return <h1 className={styles.title}>{children}</h1>;
    case "subtitle":
      return <h2 className={styles.subtitle}>{children}</h2>;
    case "chapo":
      return <p className={styles.chapo}>{children}</p>;
    case "text":
      return <p className={styles.text}>{children}</p>;
    case "legend":
      return <p className={styles.legend}>{children}</p>;
    case "quote":
      return <p className={styles.quote}>{children}</p>;
    case "extract":
      return <p className={styles.extract}>{children}</p>;
    case "card":
      return <h3 className={styles.card}>{children}</h3>;

    default:
      return null;
  }
}

export default forwardRef<HTMLDivElement, Props>(function Block(
  { blocks, className }: Props,
  ref
) {
  if (!blocks) return null;

  return (
    <div ref={ref} className={className}>
      {blocks.map((block) => (
        <BlockRenderer key={block._id} block={block} />
      ))}
    </div>
  );
});
