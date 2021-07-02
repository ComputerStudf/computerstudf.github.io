import styles from "./Home.module.scss";

export const Home = () => {
    return (
        <main className={styles.main}>
            <code className={styles.code}>$ HelloWorld</code>
            <h1 className={styles.title}>
                Welcome to <span>Computer Studf</span>
            </h1>
            <p className={styles.description}>
                We don&apos;t have a description yet...
            </p>
        </main>
    );
};
