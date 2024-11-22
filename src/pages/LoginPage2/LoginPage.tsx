import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./LoginContext/LoginContext";
import { Loading } from "../../components/loading";
import { Alert } from "@mui/material";

import imgLogo from "../../../public/logo-trilha.svg";
import logoDuna from "../../../public/imgDuna2.svg";

/* interface LoginProps {
  UserLogin: () => void;
} */

export function LoginPage2(/* { UserLogin }: LoginProps */) {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorMessageSignUp, setErrorMessageSignUp] = useState("");
  const [successMessageSignUp, setSuccessMessageSignUp] = useState("");
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const { setNameUser } = useLogin();

  /* console.log(email, password, lastName); */

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setCarregando(true);

      const response = await axios.post(
        "https://trilha-backend.onrender.com/api/auth/signin",
        {
          email,
          password,
        }
      );

      sessionStorage.setItem("user", response.data.username);

      setUser(response.data);
      setToken(response.data.token);

      setNameUser(response.data.nameUser);
      setEmail("");
      setPassword("");
      sessionStorage.setItem("token", response.data.token);
      console.log("chegouuu");
    } catch (error) {
      setErrorMessage("Senha ou email incorreto!");
      console.error(error);
    } finally {
      setCarregando(false);
      setEmail("");
      setPassword("");
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setCarregando(true);
      const response = await axios.post(
        "https://trilha-backend.onrender.com/api/auth/signup",
        {
          name,
          lastName,
          email,
          password,
        }
      );

      setName(response.data.name);
      setLastName(response.data.lastName);
      setEmail(response.data.email);
      setPassword(response.data.password);

      setSuccessMessageSignUp("Cadastro realizado com sucesso!");

      setIsSignUpVisible(false);

      setEmail("");
      setPassword("");
    } catch (error: any) {
      setErrorMessageSignUp(error.response.data.error);
      console.error(error);
    } finally {
      setCarregando(false);
      setName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setErrorMessageSignUp("");
    }
  };

  const navigate = useNavigate();
  /* function Login() {
    navigate("/hero");
  } */

  function Recover() {
    navigate("/recoverpassword");
  }

  useEffect(() => {
    if (user && token) {
      navigate("/hero");
    }
  }, [user, token, navigate]);

  return (
    <section className={styles.body}>
      <>
        <header className={styles.headerStyle}>
          <h1 className={styles.logo}>Trilha...</h1>
          <img className={styles.logoImg} src={imgLogo} alt="Logo" />
        </header>

        <section className={styles.containerSignUp}>
          <div className={styles.bodySignUp}>
            <main className={`${styles.container}`}>
              <div className={`${styles.signUp}`}>
                {/* Formulário de Login */}
                <form
                  className={`${styles.signUpBox} ${
                    isSignUpVisible ? styles.hidden : styles.show
                  }`}
                  onSubmit={handleLogin}
                >
                  <div className={styles.divtext}>
                    <h1 className={styles.textSignUp}>Entre em sua conta</h1>
                    <p className={styles.subTextSingUp}>
                      Ainda não é membro?{" "}
                      <button
                        type="button"
                        className={styles.buttonSignIn}
                        onClick={() => setIsSignUpVisible(true)}
                      >
                        Sign Up
                      </button>
                    </p>
                  </div>

                  <div className={styles.boxSignUp}>
                    <input
                      className={styles.inputBox}
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className={styles.inputBox}
                      type="password"
                      placeholder="Senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {errorMessage && (
                    <Alert
                      style={{
                        position: "fixed",
                        top: "7%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        padding: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        zIndex: 1000,
                      }}
                      severity="error"
                    >
                      {errorMessage}
                    </Alert>
                  )}

                  <button
                    onClick={Recover}
                    type="button"
                    className={styles.buttonRecover}
                  >
                    Esqueceu sua senha?
                  </button>

                  <button type="submit" className={styles.button}>
                    {carregando ? <Loading /> : "Entrar"}
                  </button>
                </form>

                {/* Formulário de Sign Up */}
                <form
                  className={`${styles.signUpBox} ${styles.subter} ${
                    isSignUpVisible ? styles.show : styles.hidden
                  }`}
                  onSubmit={handleSignUp}
                >
                  <div className={styles.divtext}>
                    <h1 className={styles.textSignUp}>Crie sua conta</h1>
                    <p className={styles.subTextSingUp}>
                      Já é membro?{" "}
                      <button
                        type="button"
                        className={styles.buttonSignIn}
                        onClick={() => setIsSignUpVisible(false)}
                      >
                        Sign In
                      </button>
                    </p>
                  </div>

                  <div className={styles.boxSignUp}>
                    <div className={styles.inBoxSignUp}>
                      <input
                        className={styles.inputBoxName}
                        type="text"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <input
                        className={styles.inputBoxName}
                        type="text"
                        placeholder="Sobrenome"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                    <input
                      className={styles.inputBox}
                      type="email"
                      placeholder="E-mail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                      className={styles.inputBox}
                      type="password"
                      placeholder="Senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {successMessageSignUp && (
                    <Alert
                      style={{
                        position: "fixed",
                        top: "7%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        padding: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        zIndex: 1000,
                      }}
                      severity="success"
                    >
                      {successMessageSignUp}
                    </Alert>
                  )}
                  {errorMessageSignUp && (
                    <Alert
                      style={{
                        position: "fixed",
                        top: "7%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        padding: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                        zIndex: 1000,
                      }}
                      severity="error"
                    >
                      {errorMessageSignUp}
                    </Alert>
                  )}

                  <button type="submit" className={styles.button}>
                    {carregando ? <Loading /> : "Criar"}
                  </button>
                </form>
              </div>

              <div
                className={`${styles.img} ${
                  isSignUpVisible ? styles.toggle_left : ""
                }`}
              >
                <img src={logoDuna} alt="Imagem de Fundo" />
              </div>
            </main>
          </div>
        </section>
      </>
    </section>
  );
}
