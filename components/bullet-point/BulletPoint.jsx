import styles from "./bullet-point.module.css";
import { LuArrowBigRight } from "react-icons/lu";

export default function BulletPoint({ key, title, content }) {
	return (
		<section key={key} className={styles.bulletPoint}>
			<h2>{title}</h2>
			<LuArrowBigRight className={styles.icon} />
			<p>{content}</p>
		</section>
	);
}
