import { X } from "lucide-react";
import styles from "./ModalCreate.module.css";

import NameTrilha from "./Steps/NameTrilha";
import AddStudents from "./Steps/AddStudents";

import { useForm } from "./hooks/useForm";

{
  /*const trilha = {
  nameTrail: "Desenvolvimento de Sistemas",
  descri: "Trilha para Desenvolvimento de Sistemas",
  quantModules: 10,
};*/
}

interface ModalCreateProps {
  closeModal: () => void;
}

export function ModalCreate({ closeModal }: ModalCreateProps) {
  const steps = [<NameTrilha />, <AddStudents />];

  const { currentStep, currentComponent, changeStep } = useForm(steps);

  return (
    <div className={styles.modalContainer}>
      <form
        onSubmit={(e) => changeStep(currentStep + 1, e)}
        className={styles.modalContent}
      >
        <X onClick={closeModal} className={styles.iconModal} />
        {currentComponent}
        <div className={styles.divButtonModal}></div>
      </form>
    </div>
  );
}
