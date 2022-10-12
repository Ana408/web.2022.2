import React from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Questao1 } from "./componets/questao_1/Questao1";
import { QuestaoA} from "./componets/questao_1/QuestaoA";
import { QuestaoB } from "./componets/questao_1/QuestaoB";
import { Questao2 } from "./componets/questao2/Questao2";
import  {Questao3}  from "./componets/Questao3";

const App = () => {
  return (
    <div className="container">
      <h1>Avaliação</h1>

      <h1>
         Questão 01
      </h1>
      <Questao1>
        <QuestaoA
          nome="Ana Karine"
          sobrenome="Nobre Bezerra"
          curso="Sistemas de Informação"
        />
        <QuestaoB />
      </Questao1>

      <h1>
         Questão 02
      </h1>
      <Questao2 />

      <h1>
         Questão 03
      </h1>

      <Questao3 />
    </div>
  );
};

export default App;
