import { IKImage } from "@components";
import Link from "next/link";

import styles from "./MenuCard.module.css";

const MenuCard = ({ option }: { option: any }) => {
  const { title, link, imgPath, imgAlt, enabled } = option;

  const transformations = "tr:w-550,h-330,fo-auto";

  return (
    <>
      {enabled ? (
        <article className={styles.card}>
          <Link href={link}>
            <h2>{title}</h2>
            <div className={styles.imgWrapper}>
              <IKImage
                path={imgPath}
                alt={imgAlt}
                transformations={transformations}
                width={550}
                height={330}
              />
            </div>
          </Link>
        </article>
      ) : (
        <article className={`${styles.card} disabled`}>
          <h2>{title}</h2>
          <div className={styles.imgWrapper}>
            <IKImage
              path={imgPath}
              alt={imgAlt}
              transformations={transformations}
              width={550}
              height={330}
            />
          </div>
        </article>
      )}
    </>
  );
};

export default MenuCard;
