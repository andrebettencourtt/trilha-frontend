import { Bell, Users, Map, Lightbulb } from "lucide-react";
import styles from "./DefaultLayout.module.css";
import { useEffect, useState } from "react";
import { ModalCreate } from "../pages/hero/ModalCreate/ModalCreate";
import { Outlet, useNavigate } from "react-router-dom";
import AccountMenu from "../pages/hero/Students/components/Avatar/Avatar";
import { SearchBar } from "./components/searchBar";
import axiosInstance from "../utils/axiosConfig";
import { useTrilha } from "../pages/hero/Trilhas/TrilhaContext/TrilhaContext";
import { Loading } from "../components/loading";

export function DefaultLayout() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isBuscatrilha, setBuscaTrilha] = useState<boolean>(false);
  const [carregando, setCarregando] = useState(false);

  const { setTrilhas } = useTrilha();
  const name = sessionStorage.getItem("user");

  function openModalCreate() {
    setIsModalOpen(true);
  }

  function closeModalCreate() {
    setIsModalOpen(false);
  }

  // Função para navegar para Alunos
  const navigate = useNavigate();
  function openStudents() {
    navigate("students");
  }

  function homePage() {
    navigate("/hero");
  }

  function openTrilhas() {
    setBuscaTrilha(true); // Ativa a busca
    navigate("trilhas");
  }

  // Consumo da API de trilhas
  useEffect(() => {
    if (isBuscatrilha) {
      setCarregando(true);
      axiosInstance
        .get("/learningPath/trails")
        .then((response) => {
          setTrilhas(response.data.data);
          console.log(response.data.data);
          setCarregando(false);
        })
        .catch((error) => {
          console.error("Erro ao buscar trilhas:", error);
        })
        .finally(() => {
          setBuscaTrilha(false);
        });
    }
  }, [isBuscatrilha]);

  return (
    <>
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.divLogoHeader}>
            <button className={styles.logoHomePage} onClick={homePage}>
              Trilha...
            </button>
            <h2 style={{ fontSize: "2rem" }}>Hello, {name}</h2>
          </div>
          <div className={styles.divInputHeader}>
            <SearchBar />

            <Bell />
            <AccountMenu />
          </div>
        </header>
        <main className={styles.mainContent}>
          <div className={styles.divNav}>
            <button onClick={openStudents} className={styles.buttonContent}>
              <Users />
              Alunos
            </button>
            <button onClick={openTrilhas} className={styles.buttonContent}>
              <Map />
              {carregando ? <Loading /> : "Trilhas"}
            </button>
            <button onClick={openModalCreate} className={styles.buttonContent}>
              <Lightbulb />
              Criar Trilhas
            </button>
          </div>
          <div className={styles.divWindom}>
            <Outlet />
          </div>
        </main>
        {isModalOpen && <ModalCreate closeModal={closeModalCreate} />}
      </section>
    </>
  );
}
