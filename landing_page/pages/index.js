import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Button from "../components/Button";
import Input from "../components/Input";

function emailIsValid(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function Home({ prodigyUrl }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  const handleOnChange = (e) => {
    setEmail(e.target.value);
  };

  const handleOnEnter = ({ key }) => {
    if (key === "Enter") {
      handleOnStart();
    }
  };

  const handleOnStart = () => {
    if (emailIsValid(email)) {
      window.location = `${prodigyUrl}?session=${email}`;
      return;
    }

    setError("");

    if (email !== "") {
      setError(`L'adresse email: ${email} est invalide`);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>
          Natural Solutions #Hack4Nature - Detect Trees · Campagne d'annotation
        </title>
        <meta
          name="description"
          content="Natural Solutions vous présente sa campagne d'annotation pour la
          détection d'arbres"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.mainTitle}>
          <h1>
            Natural Solutions vous présente sa campagne d'annotations pour la
            détection d'arbres
          </h1>
        </div>
        <div className={styles.mainImage}></div>
        <Input
          placeholder="Entrez votre adresse email"
          error={error}
          value={email}
          onChange={handleOnChange}
          onKeyPress={handleOnEnter}
        />
        <Button onClick={handleOnStart} text="Commencer" />
      </main>
      <footer className={styles.footer}>Natural Solutions</footer>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      prodigyUrl: process.env.PRODIGY_URL,
    },
  };
}