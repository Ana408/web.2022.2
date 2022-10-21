import React from "react";

 const QuestaoB = () => {
  let disciplinas = ["WEB", "Redes de computadores", "Fundamentos de Programação"];

  const listDisciplinas = () => {
    return disciplinas.map((item, index) => {
      return (
        <li  key={index}>
          {item}
        </li>
      );
    });
  };

  return (
    <div>
      <h3>Disciplinas</h3>
      <ul>{listDisciplinas()}</ul>
    </div>
  );
};
export default QuestaoB;