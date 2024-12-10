import { X } from "lucide-react";
import styles from "./ModalCreate.module.css";

import NameTrilha from "./Steps/NameTrilha";
import { ModalCreateProps } from "./types";

export function ModalCreate({
  closeModal,
  fetchTrilhas = () => {},
}: ModalCreateProps) {
  return (
    <div className={styles.modalContainer}>
      <form className={styles.modalContent}>
        <X onClick={closeModal} className={styles.iconModal} />
        <NameTrilha closeModal={closeModal} fetchTrilhas={fetchTrilhas} />{" "}
        <div className={styles.divButtonModal}></div>
      </form>
    </div>
  );
}
