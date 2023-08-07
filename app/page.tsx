import { IKImage, MenuCardSection } from "@components";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <main className={styles.main}>
      <hgroup className={styles.hgroup}>
        <h1>Vinaya</h1>
        <p>
          “…for the longevity of the true Teaching, and for supporting the
          training”
        </p>
      </hgroup>
      <div className={styles.imgWrapper}>
        <IKImage
          path={`${process.env.NEXT_PUBLIC_IK_ROOT_DIR}/harmony.png`}
          width={1100}
          transformations="tr:w-1100,h-800,fo-center"
          height={800}
          alt="harmoney"
        />
      </div>
      <MenuCardSection />
    </main>
  );
}
