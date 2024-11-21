import { useNavigate } from "react-router-dom";
import { useTrilha } from "../../TrilhaContext/TrilhaContext";
import styles from "./styles.module.css";

export default function CardTrilha() {
  const { trilhas } = useTrilha();
  const navigate = useNavigate();

  function goModulos() {
    navigate("/hero/modulos");
  }

  return (
    <div className={styles.wrapper}>
      {trilhas && trilhas.length > 0
        ? trilhas.map((trilha) => (
            <button
              onClick={goModulos}
              key={trilha.trailId}
              className={styles.content}
            >
              <div className={styles.containerQuant}>
                <div className={styles.quantModules}>i</div>
              </div>
              <h1 className={styles.nameTrilha}>{trilha.nameTrail}</h1>
            </button>
          ))
        : null}
    </div>
  );
}
