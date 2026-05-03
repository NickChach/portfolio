import Feature from "../feature/Feature";
import styles from "./features.module.css";

export default function Features({ features }) {
	return (
		<article className={styles.features}>
			{features.map((feature) => {
				return (
					<Feature key={feature.title} title={feature.title} subtitle={feature.subtitle}>
						{feature.icon}
					</Feature>
				);
			})}
		</article>
	);
}
