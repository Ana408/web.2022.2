import React from 'react';
import { useState, useEffect } from 'react'
import axios from "axios";
import '../style.css'

const Questao4 = () =>{
    const [pais, setPais] = useState([]);

    useEffect(() => {
        axios
          .get('https://restcountries.com/v2/region/africa?fields=name,population')
          .then((response)=>{
            //console.log(response.data)
            setPais(response.data)
        })
          .catch((erro) => {
            console.log(erro);
          });
      }, []
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

        return(
            <div>
                <h2>{mPopulacao()}</h2>
            </div>
        )    
}
export default Questao4;