import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const COLORS = [
  "green",
  "blue",
  "rose",
  "black",
  "blue",
  "black",
  "purple",
  "red",
  "mustard",
  "rose",
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>marinastavares</title>
        <meta name="description" content="This is Marina Tavares' site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.background}>
        {COLORS.map((value) => (
          <div className={styles[value]} key={value} />
        ))}
        <div className={styles.box}>
          <h1 className={styles.title}>Oie 👋</h1>
          <h2 className={styles.subtitle}>
            My name is Marina, I am currently working as a Systems Engineer @
            Cloudflare in Lisbon. If you want to reach out, you can try it{" "}
            <a href="mailto:marinastavares6@gmail.com">here</a> or even{" "}
            <a href="https://www.linkedin.com/in/marinastavares/">here</a> as
            well :)
          </h2>
          {/* <div className={styles.location}>
            <Image
              alt="Pin icon"
              src="/pin.png"
              aria-hidden="true"
              width={16}
              height={16}
            />
            <p className={styles["location-text"]}>Lisboa, Portugal</p>

            <Image
              className={styles.logo}
              alt="Logo"
              src="/logo.png"
              aria-hidden="true"
              height={60}
              width={110}
            />
          </div> */}
        </div>
      </main>
    </div>
  );
}
