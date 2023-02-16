import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.box}>
      <h1 className={styles.title}>Oie 👋🏻</h1>
      <h2 className={styles.subtitle}>
        My name is Marina, I am currently working as a Systems Engineer @
        Cloudflare in Lisbon. If you want to reach out, you can try it{" "}
        <a href="mailto:marinastavares6@gmail.com">here</a> or even{" "}
        <a href="https://www.linkedin.com/in/marinastavares/">here</a> as well
        :)
      </h2>
    </div>
  );
}
