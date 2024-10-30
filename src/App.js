//importando o useState do React
import { useState } from "react";

export default function App() {
  // inserir lógica aqui
  //criando uma variavel de estado
  //criar um array com dois elementos
  const [numero, setNumero] = useState(0);
  // primeira palavra (numero) é o valor inicial do h2
  //a segunda palavra (setNumero) é a função que usaremos para mudar o valor
  const diminuir = () => {
    if (numero > 0) {
      setNumero(numero - 1);
    }
  };

  return (
    <>
      <h1>useState é Hook do React</h1>
      <p>Adicionar e gerenciar estado em componentes funcionais</p>
      {/* useState é como uma "caixa" onde vc guarda uma informação e pode atualiza-la */}
      <h2>{numero}</h2>
      <button
        onClick={() => {
          setNumero(numero + 1);
        }}
      >
        +
      </button>
      <button onClick={diminuir}>-</button>
    </>
  );
}
