import { getXataClient } from "@xata";
import { IKImage } from "@components";
import styles from "./page.module.css";
import { Nav } from "@/app/components/Nav";
import { EnterOutlined, RightOutlined, LeftOutlined } from "@ant-design/icons";
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
  const { title, imgId, rule: ruleText, nextRuleId, prevRuleId } = rule as any;

  const navItems = [
    {
      id: `nav-pm-${prevRuleId.id}`,
      href: `/pm/${prevRuleId.id}`,
      Icon: LeftOutlined,
    },
    {
      id: `nav-pm-${nextRuleId.id}`,
      href: `/pm/${nextRuleId.id}`,
      Icon: RightOutlined,
    },
    {
      id: "home",
      href: "/pm/bi",
      Icon: EnterOutlined,
      styles: { marginTop: 2 },
    },
  ];

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
    <div>
      <Nav navItems={navItems} />
      <main className={styles.main}>
        <hgroup className={styles.hgroup}>
          <h1>{title}</h1>
        </hgroup>
        <div className={styles.meta}>
          <small>Artwork: Ven. Yodha, Translation: {content.translator}</small>
        </div>

        <div className={styles.imgWrapper}>
          <IKImage
            path={`${process.env.NEXT_PUBLIC_IK_PM_BI_DIR}/${imgId}.png`}
            transformations="tr:w-880,h-600,fo-auto"
            fill={true}
            alt={id}
          />
        </div>
        <div className={styles.rule}>
          <p>{ruleText}</p>
          <p>{content.translation}</p>
        </div>
      </main>
    </div>
  );
}
