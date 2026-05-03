import styles from "./feature.module.css";

export default function Feature({ title, subtitle, children, key }) {
	return (
		<section key={key} className={styles.feature}>
			{children}
			<h2>{title}</h2>
			<p>{subtitle}</p>
		</section>
	);
}
