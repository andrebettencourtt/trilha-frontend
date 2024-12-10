import { useNavigate, useParams } from "react-router-dom";
import "./modules.css";
import { useEffect, useState } from "react";
import axiosInstance from "../../../../../utils/axiosConfig";
import { Loading } from "../../../../../components/loading";

import { ModalCreateModule } from "./ModalCreateModule/ModalCreateModule";
import { Button, Menu, MenuItem } from "@mui/material";

interface Data {
  module_id: number;
  nameModule: string;
  stageCompleted?: number;
}

export default function ModuleComponent() {
  const [data, setData] = useState<Data[]>([]);
  const [carregando, setCarregando] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  const fetchModule = async () => {
    try {
      setCarregando(true);
      const response = await axiosInstance.post<{ modules: Data[] }>(
        `/modules/modules/${id}`
      );
      setData(response.data.modules);
    } catch (error) {
      console.error("Erro ao buscar os módulos:", error);
    } finally {
      setCarregando(false);
      handleClose;
    }
  };

  useEffect(() => {
    fetchModule();
  }, []);

  function deleteData(idModule: number) {
    try {
      axiosInstance.delete(`modules/delete/${id}/${idModule}`);
      setData((prevData) =>
        prevData.filter((module) => module.module_id !== idModule)
      );
    } catch (error) {
      console.error("Erro ao excluir o módulo:", error);
    } finally {
      handleClose;
    }
  }

  function updateModule(idModule: number, updatedData: Partial<Data>) {
    try {
      axiosInstance.put(`modules/update/${id}/${idModule}`, updatedData);
      setData((prevData) =>
        prevData.map((module) =>
          module.module_id === idModule ? { ...module, ...updatedData } : module
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar o módulo:", error);
    }
  }

  function handleEditModule(module: Data) {
    const updatedName = prompt(
      "Digite o novo nome do módulo:",
      module.nameModule
    );
    if (updatedName) {
      updateModule(module.module_id, {
        nameModule: updatedName,
      });
    }
  }

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function openModalCreate() {
    setIsModalOpen(true);
  }

  function closeModalCreate() {
    setIsModalOpen(false);
  }

  const navigate = useNavigate();

  function goLessons() {
    navigate(`/hero/trilhas/modulos/${id}/lessons`);
  }

  return (
    <div className="container">
      <div className="box-modulo">
        <button className="button" onClick={openModalCreate}>
          Criar Módulo
        </button>
        <h1 className="title">Módulo {id}</h1>
      </div>
      <div className="line"></div>

      {carregando ? (
        <div className="box-lista">
          <Loading />
        </div>
      ) : data.length === 0 ? (
        <div className="no-modules-message">
          <h1>Não há nenhum módulo para mostrar.</h1>
        </div>
      ) : (
        <div className="grid">
          {data.map((module) => (
            <button onClick={goLessons} key={module.module_id} className="card">
              <div className="card-content">
                <h2 className="module-title">{module.nameModule}</h2>

                {/* <button
                  className="trash"
                  onClick={() => deleteData(module.module_id)}
                >
                  <Trash />
                </button> */}

                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    style={{ color: "white" }}
                  >
                    <h1>...</h1>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => handleEditModule(module)}>
                      Editar
                    </MenuItem>

                    <MenuItem onClick={() => deleteData(module.module_id)}>
                      Excluir
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}

      {isModalOpen && (
        <ModalCreateModule
          closeModal={closeModalCreate}
          id={id}
          fetchModule={fetchModule}
        />
      )}
    </div>
  );
}
