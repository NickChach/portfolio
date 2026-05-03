import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import styles from "./contact.module.css";
import ContactHero from "@/components/contact-hero/ContactHero";
import { FaRegEnvelope, FaViber, FaWhatsapp, FaFacebookMessenger } from "react-icons/fa6";

export default function ContactPage() {
	const contacts = [
		{
			type: "contact@nickchachlioutis.gr",
			href: "mailto:contact@nickchachlioutis.gr",
			icon: <FaRegEnvelope className={styles.icon} />,
		},
		{
			type: "NovaConstantDigital",
			href: "https://m.me/NovaConstantDigital",
			icon: <FaFacebookMessenger className={styles.icon} />,
		},
		{
			type: "694 503 7327",
			href: "viber://chat?number=%2B+306945037327",
			icon: <FaViber className={styles.icon} />,
		},
		{
			type: "694 503 7327",
			href: "https://wa.me/+306945037327",
			icon: <FaWhatsapp className={styles.icon} />,
		},
	];

	return (
		<div className={styles.container}>
			<Header />
			<main>
				<ContactHero
					tag="ΕΠΙΚΟΙΝΩΝΙΑ"
					title="Ψηφιακοί συνοδοιπόροι"
					subtitle="Ξεκινάτε ένα νέο εγχείρημα ή θέλετε να βελτιώσετε την υπάρχουσα παρουσία σας; Είτε χρειάζεστε μια νέα ιστοσελίδα είτε έναν μακροχρόνιο τεχνικό συνεργάτη, θα ήθελα να σας ακούσω."
					contacts={contacts}
				/>
			</main>
			<Footer />
		</div>
	);
}
