import Link from "next/link";
import styles from "./A.module.scss";

export const A = (props) => {
    return (
        <Link {...props}>
            <a className={styles.link}>{props.children}</a>
        </Link>
    );
};
