import styles from "./Login.module.css";

export function LoginPage() {
  return (
    <body>
      <main className={styles.container}>
        <div className={styles.boxSignUp}>
          <h4 className={styles.h4}>Descubra um novo mundo!</h4>
          <h1 className={styles.h1}>Crie uma nova conta.</h1>
          <p className={styles.p}>
            Ja é membro?{" "}
            <a className={styles.a} href="http://">
              Sign In
            </a>
          </p>
          <div className={styles.boxDivSignUp}>
            <div className={styles.inBoxDivSignUp}>
              <input
                className={styles.inputBoxName}
                type="name"
                placeholder="Nome"
              />
              <input
                className={styles.inputBoxName}
                type="name"
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
            <span className={styles.span}>
              <button className={styles.button}>Criar</button>
            </span>
          </div>
        </div>
        <div
          style={{
            height: "55rem",
            border: "1px solid var(--blue-100)",
            margin: "10px",
          }}
        />
        <div className={styles.boxSignIn}>
          <h4>Acredite em sua jornada!</h4>
          <h1>Seja bem vindo novamente.</h1>
          <p>
            Ainda não é membro? <a href="http://">Sign Up</a>
          </p>
          <div className={styles.BoxDivSignIn}>
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
            <span>
              <button className={styles.button}>Entrar</button>
            </span>
          </div>
        </div>
      </main>
    </body>
  );
}
