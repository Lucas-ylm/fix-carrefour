import Avatar from "@/components/avatar/Avatar";
import Banner from "@/components/banner/Banner";
import Content from "@/components/content/Content";
import Extract from "@/components/extract/Extract";
import { data } from "./data";
import styles from "./sectionPortrait.module.scss";

type Props = { index: number };

export default function SectionPortrait({ index }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.info}>
        <Banner
          color="blue"
          content={data[index].banner}
          id={`anchor_${index}`}
        />
        <Avatar
          className={styles.avatar}
          srcProfile={data[index].avatar.srcProfile}
          altProfile={data[index].avatar.altProfile}
          name={data[index].avatar.name}
          description={data[index].avatar.description}
          article={data[index].article}
          color={data[index].color}
          type="mobile"
        />
        <Extract
          className={styles.extract}
          data={data[index].extract}
          color={data[index].color}
        />
      </div>
      <div className="grid marged">
        <Content data={data[index].content} />
      </div>
    </section>
  );
}
