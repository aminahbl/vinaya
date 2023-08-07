import { HomeOutlined } from "@ant-design/icons";
import { getXataClient } from "@xata";
import { IKImage } from "@components";
import styles from "./page.module.css";
import Link from "next/link";

const xata = getXataClient();

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const rules = await xata.db.pli_tv_pm_bi_rules.getAll();

  return rules.map((rule: any) => {
    return {
      id: rule.id,
    };
  });
}

// Multiple versions of this page will be statically generated
// using the `params` returned by `generateStaticParams`
export default async function PmBiPage({ params }: any) {
  const { id } = params;

  const rule = await xata.db.pli_tv_pm_bi_rules.read(id);
  const { title, imgId, rule: ruleText } = rule as any;

  const translations = await xata.db.pli_tv_pm_bi_translations
    .filter({ ruleId: id, language: "en" })
    .select([
      "translation",
      "translator.id",
      "translator.displayName",
      "language.id",
    ])
    .getAll();

  const translationsMap = new Map(
    translations.map((item: any) => [item.translator.id, item])
  );

  const content = {
    translator: translationsMap.get("ngfhaju").translator.displayName,
    translation: translationsMap.get("ngfhaju").translation,
  };

  if (translationsMap.get("g0l04t8").translation) {
    content.translator = translationsMap.get("g0l04t8").translator.displayName;
    content.translation = translationsMap.get("g0l04t8").translation;
  }

  return (
    <>
      <nav className={styles.nav}>
        <Link href="/">
          {" "}
          <HomeOutlined style={{ fontSize: 36, color: "#606" }} />
        </Link>
      </nav>
      <main className={styles.main}>
        <hgroup className={styles.hgroup}>
          <h1>{title}</h1>
        </hgroup>
        <div className={styles.meta}>
          <small>Translator: {content.translator}</small>
        </div>
        <div className={styles.description}>
          <p>{content.translation}</p>
        </div>
        <div>
          <div className={styles.imgWrapper}>
            <IKImage
              path={`${process.env.NEXT_PUBLIC_IK_PM_BI_DIR}/${imgId}.png`}
              transformations="tr:w-1100,h-800,fo-auto"
              width={1100}
              height={800}
              alt="np002.png"
            />
          </div>
        </div>
        <p>{ruleText}</p>
      </main>
    </>
  );
}
