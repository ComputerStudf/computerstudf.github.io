import Head from "next/head";
import styles from "../styles/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(fab);

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Computer Studf</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <code className={styles.code}>$ HelloWorld</code>
                <h1 className={styles.title}>
                    Welcome to{" "}
                    <span data-text="Computer Studf">Computer Studf</span>
                </h1>
                <p className={styles.description}>
                    We don&apos;t have a description yet...
                </p>
            </main>

            <footer className={styles.footer}>
                <a
                    href="https://github.com/ComputerStudf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                >
                    <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
                </a>
            </footer>
        </div>
    );
}
