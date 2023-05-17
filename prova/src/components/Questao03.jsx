import { useState, useEffect } from "react";

const Questao03 = () => {
    //logica deste programa: eu pego os dados da api, e dentro do useEffect, eu chamo a função VerificarMaiorMenor,
    //que irá verificar o maior e o menor valor, e setar os estados maior e menor, depois mostro na tela o maior e o menor valor.
    const [maior, setMaior] = useState("");
    const [menor, setMenor] = useState("");

    const VerificarMaiorMenor = (data) => {
        let maior = data.reduce((prev, current) => (prev.population > current.population) ? prev : current);//função para verificar o maior valor
        let menor = data.reduce((prev, current) => (prev.population < current.population) ? prev : current);//função para verificar o menor valor
        setMaior(maior.capital[0]);//setando o maior valor
        setMenor(menor.capital[0]);//setando o menor valor
    }

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/region/europe?fields=capital,population")
        .then(
            (response) => {
                return response.json();
            }
            
        )
        .then(
            (data) => {
                console.table(data.map(
                    (country) => country.capital[0] + " - " + country.population
                ))
                VerificarMaiorMenor(data);//chamando a função para verificar o maior e o menor valor
            }
        ).catch(
            (error) => {
                console.log("Erro: " + error);
            }
        );

    }, []);

    return (
        <>
            <h1>Questão 03</h1>
            <p>Maior população: {maior}</p>
            <p>Menor população: {menor}</p>
        </>
    );
}

export default Questao03;