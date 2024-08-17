import styles from "./login.module.css";

export function LoginPage() {
  return (
    <body>
      <main className={styles.container}>
        <div className={styles.boxLogin}>
          <h4>Descubra um novo mundo!</h4>
          <h1>Crie uma nova conta.</h1>
          <p>
            Ja é membro? <a href="http://">Sign In</a>
          </p>
          <div>
            <div>
              <input
                className={styles.inputBox}
                type="name"
                placeholder="Nome"
              />
              <input
                className={styles.inputBox}
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
            <span>
              <button className={styles.button}>Criar</button>
            </span>
          </div>
        </div>
        <div className={styles.boxLogin}>
          <h4>Acredite em sua jornada!</h4>
          <h1>Seja bem vindo novamente.</h1>
          <p>
            Ainda não é membro? <a href="http://">Sign Up</a>
          </p>
          <div>
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
          <button className={styles.button}>Entrar</button>
        </div>
      </main>
    </body>
  );
}
