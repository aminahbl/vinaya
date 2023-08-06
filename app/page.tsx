import { IKImage } from "@components";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
         Let’s get cooking!
          <code className={styles.code}>app/page.tsx</code>
        </p>
       
      </div>
      <div className={styles.imgWrapper}>
          <IKImage
            src="tr:w-800:q-75/pli-tv-bi-vb/np002.png"
            width={800}
            height={600}
            alt="np002.png"
          />
        </div>
    </main>
  );
}
