import MainTitle from "@/components/main-title/MainTitle";
import styles from "./page.module.css"
import EnterMenu from "@/components/enter-menu/EnterMenu";

export default function Home() {
  return (
    <main className={styles.hero}>
      <MainTitle />
      <EnterMenu />
    </main>
  );
}