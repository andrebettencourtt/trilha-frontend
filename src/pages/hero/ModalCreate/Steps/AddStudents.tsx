import { Plus, X } from "lucide-react";
import styles from "./AddStudents.module.css";

const AddStudents = () => {
  return (
    <div>
      <div className={styles.contentAddStudents}>
        <div>
          <h4 className={styles.textAddStudents}>Selecionar alunos</h4>
        </div>
        <div className={styles.contentBoxEmail}>
          <div className={styles.contentEmail}>
            <span>andreluis@gmail.com</span>
            <X />
          </div>
          <div className={styles.contentEmail}>
            <span>mariajoaquina@gmail.com</span>
            <X />
          </div>
          <div className={styles.contentEmail}>
            <span>joao@gmail.com</span>
            <X />
          </div>
          <div className={styles.contentEmail}>
            <span>robertodesouza@gmail.com</span>
            <X />
          </div>
        </div>
        <div className={styles.lineModal} />
        <div className={styles.divButtonAddStudents}>
          <button type="button" className={styles.buttonAddStudents}>
            <p className={styles.textButtonStudents}>Adicionar alunos</p>{" "}
            <Plus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudents;
