import styles from "./tag.module.css"

export default function Tag({children}) {
    return (
        <p className={styles.tag}>{children}</p>
    );
}