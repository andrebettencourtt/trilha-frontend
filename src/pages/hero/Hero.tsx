import { Bell, Users, Map, Lightbulb } from "lucide-react";
import styles from "./Hero.module.css";
import { useState } from "react";
import { ModalCreate } from "./ModalCreate/ModalCreate";
import { useNavigate } from "react-router-dom";

export function HeroPage() {
  //função de abrir e fechar o modal criar trilhas
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function openModalCreate() {
    setIsModalOpen(true);
  }

  function closeModalCreate() {
    setIsModalOpen(false);
  }

  //função para entrar e sair dos alunos
  const navigate = useNavigate();
  function openStudents() {
    navigate("/students");
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
        <div className={styles.divNav}>
          <button onClick={openStudents} className={styles.buttonContent}>
            <Users />
            Alunos
          </button>
          <button className={styles.buttonContent}>
            <Map />
            Trilhas
          </button>
          <button
            onClick={() => {
              console.log("Criar Trilhas clicado");
              openModalCreate();
            }}
            className={styles.buttonContent}
          >
            <Lightbulb />
            Criar Trilhas
          </button>
        </div>
        <div className={styles.divWindom}></div>
      </main>
      {isModalOpen && <ModalCreate closeModal={closeModalCreate} />}
    </section>
  );
}
