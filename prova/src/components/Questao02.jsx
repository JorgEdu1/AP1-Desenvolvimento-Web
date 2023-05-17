import { useState, useEffect } from "react";

const Questao02 = () => {
    //moral da historia deste programa: toda vez que clico no botao, ele inverte o booleano de Flag, e no useEffect, toda vez que o flag muda, ele muda a imagem.
    const [flag, setFlag] = useState(true);
    const [img, setImg] = useState("");

    useEffect(() => {
        if (flag) {//se flag for true, irá mostrar a imagem de frente do pokemon
            setImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png");
        } else {//se flag for false, irá mostrar a imagem de costas do pokemon
            setImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/816.png");
        }
    }, [flag]);

    return (//botao para trocar a imagem de frente e de costas do pokemon
        <>
            <h1>Questão 02</h1>
            <button onClick={() => setFlag(!flag)}>Trocar</button>
            <img style={{width: '200px'}} src={img} alt="imagem" />
        </>
    );

};

export default Questao02;