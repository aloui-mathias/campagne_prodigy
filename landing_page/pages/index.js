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
        <div className={styles.mainText}>
          <h2>
            Citoyens, citoyennes, vous souhaitez voir plus d’arbres dans les rues de votre belle ville et contribuer à votre échelle ? Eh bien vous êtes au bon endroit ! <br />
            Aidez-nous à entrainer un algorithme pour reconnaitre les arbres présents autour de chez vous. C’est fun et facile !
            Entrez votre adresse pour commencer.
          </h2>
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
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          Votre adresse mail ne sera pas communiquée ou vendue et sera traitée anonymement afin d'enregistrer vos annotations conformément aux recommandations de la CNIL et en accord avec le RGPD.
        </p>
        <div className={styles.logo}>
        </div>
      </footer>
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