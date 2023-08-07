import { getXataClient } from "@xata";
import { IKImage, RuleCard } from "@components";
import styles from "./page.module.css";

export default async function Home() {
  const xata = getXataClient();
  const rules = await xata.db.pli_tv_pm_bi_rules.getAll();

  return (
    <main className={styles.main}>
      <hgroup className={styles.hgroup}>
        <h1>Vinaya</h1>
        <p>
          “…for the longevity of the true Teaching, and for supporting the
          training”
        </p>
      </hgroup>
      <div className={styles.grid}>
        {rules.map((rule) => (
          <RuleCard rule={rule} key={rule.id} />
        ))}
      </div>
    </main>
  );
}
