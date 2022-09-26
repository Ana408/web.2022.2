import React,{useState, useEffect} from 'react'

export default props=>{
    
    const [fort, votaFort] = useState(0)
    const [quix, votaQuix] = useState(0)
    const [quib, votaQuib] = useState(0)
    const [aracati, votaaracati] = useState(0)
    const [maior,setMaior] = useState(0)

    const cidadesStr = ['Fortaleza','Quixadá','Quixeramobim','Aracati']

    useEffect(()=>{
        const cidades = [fort,quix,quib,aracati]

        let maiorLocal = maior
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]>maiorLocal) maiorLocal = cidades[i]
        }
        setMaior(maiorLocal)

        
    },[fort,quix,quib,aracati])

    function mostrarMaiores(){
        let maiores = ''
        const cidades = [fort,quix,quib,aracati]
        for (let i = 0; i < cidades.length; i++) {
            if(cidades[i]===maior) maiores+= cidadesStr[i]+' '
        }
        return maiores
    }

    return(
        <div>
            <h2>Fortaleza: {fort}</h2>
            <h2>Quixadá: {quix}</h2>
            <h2>Quixeramobim: {quib}</h2>
            <h2>Aracati: {aracati}</h2>
            <h3>Maior: {maior} : {mostrarMaiores()}</h3>
            <button onClick={()=>votaFort(fort+1)} >Votar em Fortaleza</button>
            <button onClick={()=>votaQuix(quix+1)}>Votar em Quixadá</button>
            <button onClick={()=>votaQuib(quib+1)}>Votar em Quixeramobim</button>
            <button onClick={()=>votaaracati(aracati+1)}>Votar em Aracati</button>
        </div>
    )
}