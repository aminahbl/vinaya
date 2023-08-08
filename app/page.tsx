import { IKImage, MenuCards } from "@components";
import styles from "./page.module.css";

export default async function Home() {
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
        }}
      >
        <div
          className={styles.sectionBubble1}
          style={{
            height: 1000,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "white",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
      <main className={styles.main}>
        <section>
          <hgroup className={styles.hgroup}>
            <h1>Vinaya</h1>
            <p>
              “…for the longevity of the true Teaching, and for supporting the
              training”
            </p>
          </hgroup>
          <IKImage
            path={`${process.env.NEXT_PUBLIC_IK_ROOT_DIR}/harmony.png`}
            width={1100}
            transformations="tr:w-1100,h-800,fo-center"
            height={800}
            alt="harmoney"
          />
        </section>

        <section style={{ marginTop: "120px" }}>
          <h2 style={{ fontSize: "2.25rem" }}>Explore</h2>
          <MenuCards />
        </section>
      </main>
    </>
  );
}
