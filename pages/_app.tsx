import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>marinastavares</title>
        <meta name="description" content="This is Marina Tavares' site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.background}>
        {COLORS.map((value) => (
          <div className={styles[value]} key={value} />
        ))}
        <Component {...pageProps} />
      </main>
    </>
  );
}
