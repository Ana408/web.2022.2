import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";


const Questao3 = () => {
  const [pokemons, setPokemons] = useState([])
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=" + offset)
      .then((response)=>{
        //console.log(response.data)
        setPokemons(response.data)
    })
      .catch((erro) => {
        console.log(erro);
      });
  }, [offset]
  );
 

  const generateTableBody = ()=> {
    return pokemons.map(
        (element,index)=>{
        element.key=index;
            return (
                <tr>
                    <td>{element.name}</td>
                    <td>{element.url}</td>
                </tr>
            )
        }
    )
      }

  return (
    <div>
      <h4>Listar Pokemons</h4>
      <table className='table table-striped'>
        <thead>
          <tr>
            <td>Nome</td>
            <td>url</td>
          </tr>
        </thead>
        <tbody>{generateTableBody()}</tbody>
      </table>
      <button className="btn btn-secundary" onClick={(evento) => {setOffset(offset + 10)}}>
        Ver +10
      </button>
  
    </div>
    

  );
};

export  default Questao3 ;