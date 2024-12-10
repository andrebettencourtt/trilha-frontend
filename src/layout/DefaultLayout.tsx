import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Bell, Users, Map, Lightbulb } from "lucide-react";
import styles from "./DefaultLayout.module.css";
import { SearchBar } from "./components/searchBar";
import AccountMenu from "../pages/hero/Students/components/Avatar/Avatar";
import { ModalCreate } from "../pages/hero/ModalCreate/ModalCreate";
import axiosInstance from "../utils/axiosConfig";
import { useTrilha } from "../pages/hero/Trilhas/TrilhaContext/TrilhaContext";
import { Loading } from "../components/loading";

export function DefaultLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [selectedTrilhaId, setSelectedTrilhaId] = useState<number | null>(null);

  const { setTrilhas } = useTrilha();
  const name = localStorage.getItem("nameUser");
  const navigate = useNavigate();

  function openModalCreate() {
    setIsModalOpen(true);
  }

  function closeModalCreate() {
    setIsModalOpen(false);
  }

  function openStudents() {
    navigate("students");
  }

  function homePage() {
    navigate("/hero");
  }

  const fetchTrilhas = () => {
    setCarregando(true);
    axiosInstance
      .get("/learningPath/trails")
      .then((response) => {
        setTrilhas(response.data.data);
        setCarregando(false);
      })
      .catch((error) => {
        console.error("Erro ao buscar trilhas:", error);
      });
  };

  useEffect(() => {
    fetchTrilhas();
  }, []);

  function handleSelectTrilha(id: number | null) {
    setSelectedTrilhaId(id);
    if (id === null) {
      // Exibe todas as trilhas quando não há uma trilha específica selecionada
      navigate("trilhas");
    }
  }
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
            <SearchBar onSelectTrilha={handleSelectTrilha} />
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
            <button
              onClick={() => {
                fetchTrilhas();
                navigate("trilhas");
              }}
              className={styles.buttonContent}
            >
              <Map />
              {carregando ? <Loading /> : "Trilhas"}
            </button>
            <button onClick={openModalCreate} className={styles.buttonContent}>
              <Lightbulb />
              Criar Trilhas
            </button>
          </div>
          <div className={styles.divWindom}>
            <Outlet context={{ selectedTrilhaId }} />
          </div>
        </main>
        {isModalOpen && (
          <ModalCreate
            closeModal={closeModalCreate}
            fetchTrilhas={fetchTrilhas}
          />
        )}
      </section>
    </>
  );
}
