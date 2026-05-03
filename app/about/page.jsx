import Header from "@/components/header/Header";
import styles from "./about.module.css";
import Footer from "@/components/footer/Footer";
import MainHero from "@/components/main-hero/MainHero";
import imageAbout from "../../public/images/profile.webp";
import Description from "@/components/description/Description";

export default function AboutPage() {
	const image = {
		src: imageAbout,
		alt: "Φωτογραφία του Νίκου Χαχλιούτη.",
		width: "1280",
		height: "940",
	};

	return (
		<div className={styles.container}>
			<Header />
			<main>
				<MainHero
					tag="ABOUT ME"
					title={
						<>
							Nova Constant: Θέτοντας τα νέα <em className={styles.typewriter}>πρότυπα</em>
						</>
					}
					subtitle="Ονομάζομαι Νίκος Χαχλιούτης κι είμαι full-stack web developer. Το πάθος μου είναι η δημιουργία σύγχρονων κι αξιόπιστων ψηφιακών προϊόντων κι υπηρεσιών."
					image={image}
					titleStyles={styles.h1}
					subtitleStyles={styles.p}
					heroStyles={styles.hero}
				/>
				<Description />
			</main>
			<Footer />
		</div>
	);
}
