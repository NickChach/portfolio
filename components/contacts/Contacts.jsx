import Contact from "../contact/Contact";
import styles from "./contacts.module.css";

export default function Contacts({ contacts }) {
	return (
		<ul className={styles.contacts}>
			{contacts.map((contact) => {
				return <Contact key={contact.href} type={contact.type} href={contact.href} icon={contact.icon} />;
			})}
		</ul>
	);
}
