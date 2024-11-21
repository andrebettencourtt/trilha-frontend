import styles from "./Students.module.css";

export function Students() {
  return (
    <section className={styles.container}>
      <main className={styles.mainContent}>
        <div className={styles.divWindom}>
          <h1 className={styles.textWindomHeader}>Alunos</h1>

          <div className={styles.line} />
          <div className={styles.wrapperCards}>
            <div className={styles.divCard}>
              <img
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                className={styles.avatarCard}
                src="https://github.com/andrebettencourtt.png"
              />
              <div className={styles.profileCard}>
                <div className={styles.lineCard} />
                <strong className={styles.nameCard}>André Bettencourt</strong>
                <span className={styles.courseCard}>Web Developer</span>
              </div>
            </div>
            <div className={styles.divCard}>
              <img
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                className={styles.avatarCard}
                src="https://github.com/andrebettencourtt.png"
              />
              <div className={styles.profileCard}>
                <div className={styles.lineCard} />
                <strong className={styles.nameCard}>André Bettencourt</strong>
                <span className={styles.courseCard}>Web Developer</span>
              </div>
            </div>
            <div className={styles.divCard}>
              <img
                className={styles.cover}
                src="https://plus.unsplash.com/premium_photo-1681399975135-252eab5fd2db?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
              <img
                className={styles.avatarCard}
                src="https://github.com/andrebettencourtt.png"
              />
              <div className={styles.profileCard}>
                <div className={styles.lineCard} />
                <strong className={styles.nameCard}>André Bettencourt</strong>
                <span className={styles.courseCard}>Web Developer</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
