import { useParams } from "react-router-dom";
import "./modules.css";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../../utils/axiosConfig";
import { Loading } from "../../../../../components/loading";

interface Data {
  module_id: number;
  nameModule: string;
  progress?: number;
}

export default function ModuleComponent() {
  const [data, setData] = useState<Data[]>([]);
  const [carregando, setCarregando] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setCarregando(true);
        const response = await axiosInstance.get<{ modules: Data[] }>(
          "/modules"
        );
        setData(response.data.modules);
      } catch (error) {
        console.error("Erro ao buscar os módulos:", error);
      } finally {
        setCarregando(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Módulos {id}</h1>
      {carregando ? (
        <Loading />
      ) : (
        <div className="grid">
          {data.map((module) => (
            <div key={module.module_id} className="card">
              <div className="card-content">
                <h2 className="module-title">{module.nameModule}</h2>
                {module.progress !== undefined && (
                  <>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${module.progress}%` }}
                      ></div>
                    </div>
                    <p className="progress-text">
                      {module.progress}% concluído
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
