import CardTrilha from "./components/cardTrilha/cardTrilha";
import styles from "./Trilhas.module.css";

export function Trilhas() {
  return (
    <section className={styles.container}>
      <main className={styles.mainContent}>
        <div className={styles.divWindom}>
          <h1 className={styles.textWindomHeader}>Trilhas</h1>
          <div className={styles.line} />
          <CardTrilha />
        </div>
      </main>
    </section>
  );
}
