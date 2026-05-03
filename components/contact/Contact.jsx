import styles from "./contact.module.css";

export default function Contact({ key, type, href, icon }) {
	return (
		<li key={key} className={styles.contact}>
			{icon}
			<a href={href} target="_blank">
				{type}
			</a>
		</li>
	);
}
