import { MenuCard } from "@components";
import styles from "./MenuCards.module.css";
import { getXataClient } from "@xata";

const xata = getXataClient();

const MenuCards = async () => {
  const data = await xata.db.rules.getFirst();

  const SUPPORTED_EXPLORATIONS = {
    pmBi: {
      id: "pm-bi",
      title: "Bhikkhunīpātimokkhapāḷi",
      link: "/pm/bi",
      imgPath: `${process.env.NEXT_PUBLIC_IK_PM_BI_DIR}/${data?.imgId}.png`,
      imgAlt: data?.imgId ?? "Bhikkhunīpātimokkhapāḷi",
      enabled: true,
    },
    pmBu: {
      id: "pm-bu",
      title: "Bhikkhupātimokkhapāḷi",
      link: "/pm/bu",
      imgPath: `${process.env.NEXT_PUBLIC_IK_ROOT_DIR}/mvp-bu-2-ss002.png`,
      imgAlt: "Bhikkhupātimokkhapāḷi",
      enabled: false,
    },
  };

  return (
    <div className={styles.grid}>
      {Object.values(SUPPORTED_EXPLORATIONS).map((option) => (
        <MenuCard option={option} key={option.id} />
      ))}
    </div>
  );
};

export default MenuCards;
