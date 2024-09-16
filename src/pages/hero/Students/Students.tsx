import { ArrowLeft, Bell /* Users, Map, Lightbulb */ } from "lucide-react";
import styles from "./Students.module.css";
import { useNavigate } from "react-router-dom";

export function Students() {
  const navigate = useNavigate();

  function backToHero() {
    navigate("/hero");
  }

  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.divLogoHeader}>
          <h1 style={{ fontSize: "3rem" }}>Trilha...</h1>
          <h2 style={{ fontSize: "2rem" }}>Hello, Luis</h2>
        </div>
        <div className={styles.divInputHeader}>
          <input
            placeholder="Pesquisar"
            className={styles.searchBar}
            type="text"
          />

          <Bell />
          <img
            className={styles.avatar}
            src="https://github.com/andrebettencourtt.png"
          />
        </div>
      </header>
      <main className={styles.mainContent}>
        {/* <div className={styles.divNav}>
          <button className={styles.buttonContent}>
            <Users />
            Alunos
          </button>
          <button className={styles.buttonContent}>
            <Map />
            Trilhas
          </button>
          <button className={styles.buttonContent}>
            <Lightbulb />
            Criar Trilhas
          </button>
        </div> */}
        <div className={styles.divWindom}>
          <div className={styles.divWindomHeader}>
            <button className={styles.buttonWindomHeader}>
              <ArrowLeft
                onClick={backToHero}
                className={styles.iconWindomHeader}
              />
            </button>
            <h1 className={styles.textWindomHeader}>Alunos</h1>
          </div>

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
