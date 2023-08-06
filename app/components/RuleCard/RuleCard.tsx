import { IKImage } from "@components";
import Link from "next/link";

import styles from "./RuleCard.module.css";
import { PliTvPmBiRulesRecord } from "@xata";

const RuleCard = ({ rule }: { rule: any }) => {
  const { title, imgId } = rule;

  const src = `tr:w-235,h-210,fo-auto/${process.env.NEXT_PUBLIC_IK_PM_BI_DIR}/${imgId}.png`;

  return (
    <article className={styles.card}>
      <Link href={`/pm/${rule.id}`}>
        <h2>{title}</h2>
        <div className={styles.imgWrapper}>
          {
            <IKImage
              src={src}
              width={235}
              height={210}
              alt="np002.png"
            />
          }
        </div>
      </Link>
    </article>
  );
};

export default RuleCard;
