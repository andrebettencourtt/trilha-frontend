import React, { useEffect, useState } from "react";
import "./lessons.css";
import axiosInstance from "../../../../../utils/axiosConfig";
import { useParams } from "react-router-dom";

interface Lesson {
  id: string;
  title_lesson: string;
  text_lesson: string;
}

export default function Lessons() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title_lesson: "",
    text_lesson: "",
  });
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Modificar os tipos de id e idModule para number
  const { id, idModule } = useParams<{ id: string; idModule: string }>();

  // Garantir que id e idModule sejam números
  const idNumber = Number(id);
  const idModuleNumber = Number(idModule);

  useEffect(() => {
    // Verificar se os parâmetros são válidos
    if (isNaN(idNumber) || isNaN(idModuleNumber)) {
      setError("ID ou ID do módulo não são válidos.");
      return;
    }

    const fetchLessons = async () => {
      setLoading(true);
      setError(""); // Resetando o erro ao tentar nova requisição
      try {
        const response = await axiosInstance.get(
          `/api/lesson/list/${idNumber}/${idModuleNumber}`
        );
        setLessons(response.data);
        console.log("ola");
      } catch (err) {
        setError("Erro ao carregar as lições. Tente novamente.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [idNumber, idModuleNumber]); // Usando os valores numéricos como dependências

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await axiosInstance.post(`/lesson/create/${idNumber}/${idModuleNumber}`, {
        title_lesson: formData.title_lesson,
        text_lesson: formData.text_lesson,
      });
      setModalOpen(false);
      setFormData({ title_lesson: "", text_lesson: "" });
      // Recarregar as lições após criar uma nova.
      const response = await axiosInstance.get(
        `/lesson/list/${idNumber}/${idModuleNumber}`
      );
      setLessons(response.data);
    } catch (err) {
      setError("Erro ao criar a lição. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="container">
      <main className="mainContent">
        <div className="divWindom">
          <div className="box-div">
            <button className="button" onClick={() => setModalOpen(true)}>
              Criar Lições
            </button>
            <h1 className="textWindomHeader">Lições</h1>
          </div>

          <div className="line" />
          <div className="wrapper">
            {loading && <p>Carregando lições...</p>}
            {error && <p className="errorText">{error}</p>}
            {!loading && lessons.length > 0
              ? lessons.map((lesson) => (
                  <button key={lesson.id} className="content">
                    <div className="containerQuant">
                      <div className="quantModules">i</div>
                    </div>
                    <h1 className="nameTrilha">{lesson.title_lesson}</h1>
                    <p>{lesson.text_lesson}</p>
                  </button>
                ))
              : !loading && <p>Nenhuma lição encontrada.</p>}
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="modalOverlay" onClick={() => setModalOpen(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <h2>Criar Nova Lição</h2>
            <form onSubmit={handleSubmit}>
              <div className="formGroup">
                <label htmlFor="title_lesson">Título da Lição</label>
                <input
                  type="text"
                  id="title_lesson"
                  name="title_lesson"
                  value={formData.title_lesson}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formGroup">
                <label htmlFor="text_lesson">Descrição da Lção</label>
                <textarea
                  id="text_lesson"
                  name="text_lesson"
                  value={formData.text_lesson}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="formActions">
                <button
                  type="submit"
                  className="buttonSubmit"
                  disabled={loading}
                >
                  {loading ? "Salvando..." : "Salvar"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
