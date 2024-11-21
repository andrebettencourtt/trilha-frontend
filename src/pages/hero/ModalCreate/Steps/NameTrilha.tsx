import styles from "./NameTrilha.module.css";
import { FormEvent, useState } from "react";
import axiosInstance from "../../../../utils/axiosConfig";
import { Loading } from "../../../../components/loading";

interface ModalCreateProps {
  closeModal: () => void;
}

const NameTrilha = ({ closeModal }: ModalCreateProps) => {
  const [nameTrail, setNameTrilha] = useState("");
  const [quantModules, setQuantModules] = useState("");
  const [error, setError] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!nameTrail || !quantModules || isNaN(Number(quantModules))) {
      setError("Por favor, preencha todos os campos corretamente.");
      return;
    }

    try {
      setCarregando(true);
      setError(""); // Limpa o erro antes de fazer a requisição
      const response = await axiosInstance.post("/learningPath/createTrail", {
        nameTrail: nameTrail,
        quantModules: quantModules,
      });

      console.log(response);
      closeModal(); // Fecha o modal após o sucesso
    } catch (err) {
      console.error(err);
      setError("Ocorreu um erro ao criar a trilha. Tente novamente.");
    } finally {
      setNameTrilha("");
      setQuantModules("");
      setCarregando(false);
    }
  };

  return (
    <div>
      <div className={styles.textModal}>
        <h4>Comece por aqui...</h4>
      </div>
      <form className={styles.inputModal}>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite o nome da sua trilha"
          value={nameTrail}
          onChange={(e) => setNameTrilha(e.target.value)}
        />
        <input
          className={styles.input}
          maxLength={2}
          type="text"
          placeholder="Quantos passos?"
          value={quantModules}
          onChange={(e) => setQuantModules(e.target.value)}
        />
        <span className={styles.lineModal}></span>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className={styles.divButtonArrow}>
          <button
            type="button"
            onClick={handleSubmit}
            className={styles.buttonModal}
          >
            <p className={styles.textButtonModal}>
              {carregando ? <Loading /> : "Criar"}
            </p>
          </button>
        </div>
      </form>
    </div>
  );
};

export default NameTrilha;
