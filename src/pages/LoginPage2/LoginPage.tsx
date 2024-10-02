import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";

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
  /* console.log(email, password, lastName); */

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://trilha-backend.onrender.com/api/auth/signin",
        {
          email,
          password,
        }
      );

      console.log(response.data);
      setUser(response.data);

      // Exemplo: redirecionar ou salvar o token
    } catch (error) {
      setErrorMessage("Falha ao fazer login. Verifique suas credenciais.");
      console.error(error);
    }
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://trilha-backend.onrender.com/api/auth/signup",
        {
          name,
          lastName,
          email,
          password,
        }
      );
      console.log(email);
      console.log("a");
      setSuccessMessageSignUp("Cadastro realizado com sucesso!");
      setErrorMessageSignUp("");
      setIsSignUpVisible(false); // Opcional: Redirecionar para o login após o cadastro
      console.log(response.data);
      setEmail("");
      setPassword("");
    } catch (error) {
      setErrorMessageSignUp("Falha ao cadastrar");
      console.error(error);
    }
  };

  const navigate = useNavigate();
  /* function Login() {
    navigate("/hero");
  } */

  useEffect(() => {
    if (user) {
      navigate("/hero");
    }
  }, [user, navigate]); //

  return (
    <section className={styles.body}>
      {user == null ? (
        <>
          <header className={styles.headerStyle}>
            <h1 className={styles.logo}>Trilha...</h1>
            <img
              className={styles.logoImg}
              src="../../assets/logo-trilha.svg"
              alt="Logo"
            />
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
                      <p className={styles.error}>{errorMessage}</p>
                    )}

                    <button type="submit" className={styles.button}>
                      Entrar
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
                      <p className={styles.success}>{successMessageSignUp}</p>
                    )}
                    {errorMessageSignUp && (
                      <p className={styles.error}>{errorMessageSignUp}</p>
                    )}

                    <button type="submit" className={styles.button}>
                      Criar
                    </button>
                  </form>
                </div>

                <div
                  className={`${styles.img} ${
                    isSignUpVisible ? styles.toggle_left : ""
                  }`}
                >
                  <img src="../../public/imgDuna2.svg" alt="Imagem de Fundo" />
                </div>
              </main>
            </div>
          </section>
        </>
      ) : null}
    </section>
  );
}
