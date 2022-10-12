import React from "react";

 const QuestaoB = () => {
  let disciplinas = ["WEB", "Redes de computadores", "Fundamentos de Programação"];

  const listDisciplinas = () => {
    return disciplinas.map((item, index) => {
      return (
        <li className="list-group-item" key={index}>
          {item}
        </li>
      );
    });
  };

  return (
    <div>
      <h4 className="list-group-item">Disciplinas</h4>
      <ul className="list-group">{listDisciplinas()}</ul>
    </div>
  );
};
export   {QuestaoB} 