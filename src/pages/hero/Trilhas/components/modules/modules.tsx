import "./modules.css";

interface Module {
  name: string;
  progress: number;
}

const modules: Module[] = [
  { name: "Fundamentos de React", progress: 10 },
  { name: "JavaScript Avançado", progress: 60 },
  { name: "Node.js Básico", progress: 40 },
  { name: "CSS Moderno", progress: 90 },
  { name: "TypeScript Essencial", progress: 30 },
  { name: "Git e GitHub", progress: 85 },
];

export default function ModuleComponent() {
  return (
    <>
      <div className="container">
        <h1 className="title">Modulos</h1>
        <div className="grid">
          {modules.map((module, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <h2 className="module-title">{module.name}</h2>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${module.progress}%` }}
                  ></div>
                </div>
                <p className="progress-text">{module.progress}% concluído</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
