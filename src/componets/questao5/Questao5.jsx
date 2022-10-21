import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import '../style.css'

const Questao5 = () =>{
    const [maior, setMaior] = useState([''])
    const [menor, setMenor] = useState([''])
    const [pais, setPais] = useState([])
    const [regiao, setRegiao] = useState(['africa'])
    useEffect(() => {
        axios
          .get('https://restcountries.com/v2/region/'+ regiao + '?fields=name,population')
          .then((response)=>{
            //console.log(response.data)
            setPais(response.data)
        })
          .catch((erro) => {
            console.log(erro);
          });
      }, [regiao]
      );

      const mPopulacao = () => {
        let maior = 0;
        let paises = '';
        pais.forEach((element) => {
          if (element.population > maior) 
            maior = element.population;
            paises = element.name;
        });
        return paises;
      };

      const menorPopulacao = () => {
        let menor = pais[0].population;
        let paises = '';
        pais.forEach((element) => {
          if (element.population < menor) 
            menor = element.population;
            paises = element.name;
        });
        return paises;
      };      
      
      useEffect(
        function verifica(){
        if (regiao === "asia") {
          setMenor(menorPopulacao());
        }else if (regiao === "americas") {
          setMaior(mPopulacao());
        }
      }, [pais]);

      return(
        <div>
            <button onClick={(e) =>{setRegiao('americas')}}>Americas</button>
            <button onClick={(e) =>{setRegiao('asia')}}>Asia</button>
            <p> <h3>{maior}</h3> </p>
            <p> <h3>{menor}</h3> </p>
            <button  onClick={(e) => { 
              setRegiao('africa');
              setMaior('');
              setMenor('');
        }}>Voltar</button>
        </div>
      )

    }
    export default Questao5;