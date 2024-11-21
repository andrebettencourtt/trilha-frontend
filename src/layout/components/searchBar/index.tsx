import { useState } from "react";
import styles from "./styles.module.css";
import { useTrilha } from "../../../pages/hero/Trilhas/TrilhaContext/TrilhaContext";

export function SearchBar() {
  const [search, setSearch] = useState("");
  const { trilhas } = useTrilha();

  const searchToLowerCase = search.toLowerCase();

  const istrilha = trilhas.filter((trilha: any) =>
    trilha.nameTrail.toLowerCase().includes(searchToLowerCase)
  );

  return (
    <div className={styles.searchBarWrapper}>
      <input
        className={styles.searchBar}
        placeholder="Pesquisar"
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {search && istrilha.length > 0 && (
        <ul className={styles.resultList}>
          {istrilha.map((trilha: any) => (
            <li key={trilha.trailId} className={styles.resultItem}>
              <p>{trilha.nameTrail}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
