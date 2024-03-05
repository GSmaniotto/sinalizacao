import "./App.css";
import { Sinalizacao } from "./Sinalizacao";

function App() {
  return (
    <div className="App">
      <Sinalizacao
        cores={[
          {id: '1', cor: "red", nome: "vermelho" },
          {id: '2', cor: "yellow", nome: "amarelo" },
          {id: '3', cor: "lime", nome: "verde" },
        ]}
      />
    </div>
  );
}

export default App;
