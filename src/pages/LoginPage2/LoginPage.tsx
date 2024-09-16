import { useState } from "react";
import styles from "./LoginPage.module.css";

export function LoginPage2() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  return (
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
            {/* <div className={styles.img}>
              <img src="../../public/imgDuna2.svg" alt="Imagem de Fundo" />
            </div> */}

            {/*             <div className={`${styles.signUp} `}>
              
            </div> */}

            <div className={`${styles.signUp}`}>
              <form
                className={`${styles.signUpBox} ${
                  isSignUpVisible ? styles.hidden : styles.show
                }`}
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
                  />
                  <input
                    className={styles.inputBox}
                    type="password"
                    placeholder="Senha"
                  />
                </div>

                <button type="submit" className={styles.button}>
                  Entrar
                </button>
              </form>

              <form
                className={`${styles.signUpBox} ${styles.subter} ${
                  isSignUpVisible ? styles.show : styles.hidden
                }`}
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
                    />
                    <input
                      className={styles.inputBoxName}
                      type="text"
                      placeholder="Sobrenome"
                    />
                  </div>
                  <input
                    className={styles.inputBox}
                    type="email"
                    placeholder="E-mail"
                  />
                  <input
                    className={styles.inputBox}
                    type="password"
                    placeholder="Senha"
                  />
                </div>

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

          {/* <main className={`${styles.container}`}></main> */}
        </div>
      </section>
    </>
  );
}
