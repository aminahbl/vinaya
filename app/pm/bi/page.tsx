import { getXataClient } from "@xata";
import { Nav, RuleCard } from "@components";
import styles from "./page.module.css";

export default async function Home() {
  const xata = getXataClient();
  const rules = await xata.db.pli_tv_pm_bi_rules.getAll();

  return (
    <>
    <Nav navItems={[]}/>
    <main className={styles.main}>
      <hgroup className={styles.hgroup}>
        <h1>Pāḷi bhikkhunī pātimokkha</h1>
        {<p>
          “This will affect people’s confidence…”
        </p>}
      </hgroup>
      <div className={styles.grid}>
        {rules.map((rule) => (
          <RuleCard rule={rule} key={rule.id} />
        ))}
      </div>
    </main>
    </>
  );
}
