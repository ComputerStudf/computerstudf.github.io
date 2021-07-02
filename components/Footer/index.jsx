import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { A } from "../A";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <A
                href="https://github.com/ComputerStudf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FontAwesomeIcon icon={["fab", "github"]} /> GitHub
            </A>
        </footer>
    );
};
