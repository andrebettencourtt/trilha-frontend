import { ArrowRight } from "lucide-react";
import styles from "./NameTrilha.module.css";

const NameTrilha = () => {
  return (
    <div>
      <div className={styles.textModal}>
        <h4>Comece por aqui...</h4>
      </div>
      <div className={styles.inputModal}>
        <input
          className={styles.input}
          type="text"
          placeholder="Digite o nome da sua trilha"
        />
        <input
          className={styles.input}
          type="text"
          placeholder="Quantos passos?"
        />
        <span className={styles.lineModal}></span>
        <div className={styles.divButtonArrow}>
          <button type="submit" className={styles.buttonModal}>
            <p className={styles.textButtonModal}>Próximo</p>
            <ArrowRight className={styles.iconButtonModal} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameTrilha;
