// env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_JWT_SECRET: string;
    // Adicione outras variáveis aqui, se necessário
  }
}
