import { useState } from "react";
import styles from "./styles.module.css";
import { useTrilha } from "../../../pages/hero/Trilhas/TrilhaContext/TrilhaContext";

export function SearchBar({
  onSelectTrilha,
}: {
  onSelectTrilha: (id: number | null) => void;
}) {
  const [search, setSearch] = useState("");
  const { trilhas } = useTrilha();

  const searchToLowerCase = search.toLowerCase();

  const filteredTrilhas = trilhas.filter((trilha: any) =>
    trilha.nameTrail.toLowerCase().includes(searchToLowerCase)
  );

  function handleSearchChange(value: string) {
    setSearch(value);
    if (value.trim() === "") {
      // Se o campo de pesquisa estiver vazio, exiba todas as trilhas
      onSelectTrilha(null);
    }
  }

  return (
    <div className={styles.searchBarWrapper}>
      <input
        className={styles.searchBar}
        placeholder="Pesquisar trilhas..."
        type="search"
        value={search}
        onChange={(e) => handleSearchChange(e.target.value)}
      />

      {search && filteredTrilhas.length > 0 && (
        <ul className={styles.resultList}>
          {filteredTrilhas.map((trilha: any) => (
            <li key={trilha.trailId} className={styles.resultItem}>
              <p onClick={() => onSelectTrilha(trilha.trailId)}>
                {trilha.nameTrail}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
