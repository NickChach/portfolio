import styles from "./contact.module.css";

export default function Contact({ type, href, icon }) {
	return (
		<li className={styles.contact}>
			{icon}
			<a href={href} target="_blank">
				{type}
			</a>
		</li>
	);
}
