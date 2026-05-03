"use client";

import { useState } from "react";
import styles from "./contact-form.module.css";

export default function ContactForm() {
	const [status, setStatus] = useState("idle");

	async function handleSubmit(e) {
		e.preventDefault();
		setStatus("loading");

		const formData = new FormData(e.target);

		try {
			const respond = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					name: formData.get("name"),
					email: formData.get("email"),
					message: formData.get("message"),
				}),
			});

			if (!respond.ok) throw new Error();
			setStatus("success");
			e.target.reset();
		} catch {
			setStatus("error");
		}
	}

	return (
		<section className={styles.contactForm}>
			<hgroup>
				<h2>Στείλτε μου ένα μήνυμα</h2>
				<p>Υπόσχομαι ότι θα απαντήσω σύντομα.</p>
			</hgroup>
			<form onSubmit={handleSubmit}>
				<section>
					<label htmlFor="name">Όνομα</label>
					<input type="text" name="name" id="name" minLength="3" placeholder="Το όνομά σας" required></input>
				</section>
				<section>
					<label htmlFor="email">E-mail</label>
					<input type="email" name="email" id="email" placeholder="Το e-mail σας" required></input>
				</section>
				<section>
					<label htmlFor="message">Μήνυμα</label>
					<textarea name="message" id="message" rows="8" placeholder="Μιλήστε μου για το εγχείρημά σας..." required></textarea>
				</section>
				<button type="submit" disabled={status === "loading"}>
					{status === "loading" ? "Αποστολή..." : "Αποστολή"}
				</button>
				{status === "success" && <p>Το μήνυμά σας εστάλη επιτυχώς!</p>}
				{status === "error" && <p>Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.</p>}
			</form>
		</section>
	);
}
