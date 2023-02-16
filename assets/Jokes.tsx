import styles from "../styles/Home.module.css";
import { useState, useCallback, useEffect } from "react";

const Jokes = ({ title }: { title: string }) => {
  const [joke, setJoke] = useState<{ setup: string; punchline: string }>({
    setup: "",
    punchline: "",
  });

  const handleJoke = useCallback(async () => {
    try {
      await fetch("https://official-joke-api.appspot.com/random_joke")
        .then((res) => res.json())
        .then((res) => {
          setJoke(res);
        });
    } catch (e) {}
  }, []);

  useEffect(() => {
    handleJoke();
  }, []);

  return (
    <div className={styles.box}>
      <h1 className={styles["title-zone"]}>Welcome to the {title} subdomain</h1>
      <h2 className={styles.joke}>{joke?.setup}</h2>
      <h2 className={styles.punchline}>{joke?.punchline}</h2>
    </div>
  );
};

export default Jokes;
