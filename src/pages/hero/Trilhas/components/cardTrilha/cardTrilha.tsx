import { useNavigate } from "react-router-dom";
import { useTrilha } from "../../TrilhaContext/TrilhaContext";
import styles from "./styles.module.css";

export default function CardTrilha({
  selectedTrilhaId,
}: {
  selectedTrilhaId: number | null;
}) {
  const { trilhas } = useTrilha();
  const navigate = useNavigate();

  function goModulos(id: number) {
    navigate(`/hero/trilhas/modulos/${id}`);
  }

  const displayedTrilhas = selectedTrilhaId
    ? trilhas.filter((trilha) => trilha.trailId === selectedTrilhaId)
    : trilhas;

  return (
    <div className={styles.wrapper}>
      {displayedTrilhas && displayedTrilhas.length > 0
        ? displayedTrilhas.map((trilha) => (
            <button
              onClick={() => goModulos(trilha.trailId)}
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
