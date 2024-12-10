import styles from "./NameModule.module.css";
import { FormEvent, useState } from "react";
import axiosInstance from "../../../../../../../utils/axiosConfig";
import { Loading } from "../../../../../../../components/loading";

interface ModalCreateModuleProps {
  closeModal: () => void;
  idTrail?: string;
  fetchModule: () => void;
  updateModule: () => void;
}

const NameModule = ({
  closeModal,
  idTrail,
  fetchModule,
}: ModalCreateModuleProps) => {
  const [nameModule, setNameModule] = useState("");
  const [descriptionModule, setDescriptionModule] = useState("");

  const [quantLessons, setQuantLessons] = useState("");
  const [error, setError] = useState("");
  const [carregando, setCarregando] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !nameModule ||
      !descriptionModule ||
      !quantLessons ||
      isNaN(Number(quantLessons))
    ) {
      setError("Por favor, preencha todos os campos corretamente.");
      return;
    }

    try {
      setCarregando(true);
      setError("");
      const response = await axiosInstance.post(`/modules/create/${idTrail}`, {
        nameModule: nameModule,
        descriptionModule: descriptionModule,
        quantLessons: Number(quantLessons),
      });

      console.log(response);
      closeModal();
      fetchModule();
    } catch (err) {
      console.error(err);
      setError("Ocorreu um erro ao criar a trilha. Tente novamente.");
    } finally {
      setNameModule("");
      setDescriptionModule("");
      setQuantLessons("");
      setCarregando(false);
    }
  };

  return (
    <div>
      <div className={styles.textModal}>
        <h4>Crie seu módulo...</h4>
      </div>
      <form className={styles.inputModal}>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite o nome do seu módulo"
          value={nameModule}
          onChange={(e) => setNameModule(e.target.value)}
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Descrição..."
          value={descriptionModule}
          onChange={(e) => setDescriptionModule(e.target.value)}
        />
        <input
          className={styles.input}
          maxLength={2}
          type="text"
          placeholder="Quantos passos?"
          value={quantLessons}
          onChange={(e) => setQuantLessons(e.target.value)}
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

export default NameModule;
