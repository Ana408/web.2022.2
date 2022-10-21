import React, { useState } from "react";
import "../style.css";

 const Questao2 = () => {
  const [operacao, setOperacao] = useState(0);
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  
  return (
    <div>
      <div>
        <input name="valor1" type="text" onChange={(e) => {
            setValor1(parseFloat(e.target.value));
          }}
        />
        <input name="valor2" type="text" onChange={(e) => {
            setValor2(parseFloat(e.target.value));
          }}
        />
      </div>

      <div>
        <button  className="btn btn-primary" onClick={(e) => {
            setOperacao(valor1 + valor2);
          }} >
          +
        </button>
        <button className="btn btn-primary" onClick={(e) => {
            setOperacao(valor1 - valor2);
          }}>
          -
        </button>
        <button className="btn btn-primary" onClick={(e) => {
            setOperacao(valor1 * valor2);
          }}>
          *
        </button>
        <button className="btn btn-primary" onClick={(e) => {
            setOperacao(valor1 / valor2);
          }}>
          /
        </button>
      </div>
      <h5>Resultado: {operacao}</h5>
    </div> 
  );
};
export default Questao2;

