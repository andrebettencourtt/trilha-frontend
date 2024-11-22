import { ChevronLeft } from "lucide-react";
import styles from "./RecoverPassword.module.css";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import axiosInstance from "../../../utils/axiosConfig";
import { Loading } from "../../../components/loading";

export function RecoverPassword() {
  const navigate = useNavigate();
  const [showSecondCard, setShowSecondCard] = useState(false);

  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [carregando, setCarregando] = useState(false);

  function backToLogin() {
    navigate("/");
  }

  /*  function handleShowSecondCard() {
    setShowSecondCard(true);
  } */

  const axios = axiosInstance;

  async function handleSendEmail() {
    try {
      setCarregando(true);

      const response = await axios.post("/generateCode", {
        email,
      });
      if (response.status === 200) {
        setShowSecondCard(true); // Exibe o segundo cartão
        setError(""); // Limpa qualquer erro anterior
      }
    } catch (error) {
      setError("Erro ao enviar o e-mail. Tente novamente.");
      console.error("Erro ao enviar o e-mail:", error);
    } finally {
      setCarregando(false);
    }

    setEmail("");
  }

  async function handleVerifyCode() {
    try {
      setCarregando(true);

      const response = await axios.post("/updatePassword", {
        email: email, // Supondo que o e-mail seja necessário novamente
        code: code,
        newPassword: newPassword, // Certifique-se de adicionar o estado `code` para capturar o valor do campo
      });

      if (response.status === 200) {
        navigate("/"); // Redireciona para a página de redefinição de senha
      }
    } catch (error) {
      console.error("Erro ao verificar o código:", error);
      // Exibir uma mensagem de erro para o usuário
    } finally {
      setCarregando(false);
    }
  }

  return (
    <section className={styles.body}>
      <header className={styles.headerStyle}>
        <h1 className={styles.logo}>Trilha...</h1>
        <img
          className={styles.logoImg}
          src="../../assets/logo-trilha.svg"
          alt="Logo"
        />
      </header>

      <section className={styles.containerSignUp}>
        <div className={styles.bodyContainer}>
          <main className={styles.container}>
            <div className={styles.h1Recover}>
              <button
                onClick={backToLogin}
                className={styles.buttonIconRecover}
              >
                <ChevronLeft className={styles.iconRecover} />
              </button>
              <h1>Recuperação de senha</h1>
            </div>

            {/* Primeiro Card */}
            <div
              className={`${styles.recoverPassword} ${
                showSecondCard ? styles.hidden : styles.visible
              }`}
            >
              <h1 className={styles.textRecover}>Digite seu e-mail:</h1>
              <form className={styles.formRecover} method="post">
                <input
                  className={styles.inputRecover}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                {error && <p className={styles.error}>{error}</p>}

                <p className={styles.pRecover}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit...
                </p>
                <div className={styles.divButtonRecover}>
                  {/* <button
                    className={styles.buttonRecover}
                    type="button"
                    onClick={handleShowSecondCard}
                  >
                    Enviar
                  </button> */}
                  <button
                    className={styles.buttonRecover}
                    type="button"
                    onClick={handleSendEmail}
                  >
                    {carregando ? <Loading /> : "Entrar"}
                  </button>
                </div>
              </form>
            </div>

            {/* Segundo Card */}
            <div
              className={`${styles.recoverPassword} ${
                showSecondCard ? styles.visible : styles.hidden
              }`}
            >
              <p className={styles.pRecover2}>
                Digite o código enviado para autenticação
              </p>
              <form className={styles.formRecover} method="post">
                <div className={styles.divCod}>
                  <input
                    className={styles.inputRecoverCod}
                    maxLength={1}
                    type="text"
                    onChange={(e) => setCode(code + e.target.value)}
                  />
                  <input
                    className={styles.inputRecoverCod}
                    maxLength={1}
                    type="text"
                    onChange={(e) => setCode(code + e.target.value)}
                  />
                  <input
                    className={styles.inputRecoverCod}
                    maxLength={1}
                    type="text"
                    onChange={(e) => setCode(code + e.target.value)}
                  />
                  <input
                    className={styles.inputRecoverCod}
                    maxLength={1}
                    type="text"
                    onChange={(e) => setCode(code + e.target.value)}
                  />
                  <input
                    className={styles.inputRecoverCod}
                    maxLength={1}
                    type="text"
                    onChange={(e) => setCode(code + e.target.value)}
                  />
                  <input
                    className={styles.inputRecoverCod}
                    maxLength={1}
                    type="text"
                    onChange={(e) => setCode(code + e.target.value)}
                  />
                </div>

                {error && <p className={styles.error}>{error}</p>}

                <p className={styles.pRecover2}>Confirme seu e-mail:</p>
                <input
                  className={styles.inputRecover}
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <p className={styles.pRecover2}>Nova senha:</p>
                <input
                  className={styles.inputRecover}
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <div className={styles.divButtonRecover}>
                  <button
                    className={styles.buttonRecover}
                    type="button"
                    onClick={handleVerifyCode}
                  >
                    {carregando ? <Loading /> : "Entrar"}
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </section>
  );
}
