import { X } from "lucide-react";
import styles from "./ModalCreateModule.module.css";

import NameModule from "./NameModule/NameModule";
import { ModalCreateProps } from "../../../../ModalCreate/types";

export function ModalCreateModule({
  closeModal,
  id,
  fetchModule = () => {},
  updateModule = () => {},
}: ModalCreateProps) {
  return (
    <div className={styles.modalContainer}>
      <form className={styles.modalContent}>
        <X onClick={closeModal} className={styles.iconModal} />
        <NameModule
          closeModal={closeModal}
          idTrail={id}
          fetchModule={fetchModule}
          updateModule={updateModule}
        />
        <div className={styles.divButtonModal}></div>
      </form>
    </div>
  );
}
