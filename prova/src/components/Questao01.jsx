import { useState, useEffect } from "react";

function Questao01X() {
    
    const alunos = [
        { nome: "Sicrano", notas: {ap1: 2.4, ap2: 5.4} },
        { nome: "Beltrano", notas: {ap1: 6.7, ap2: 3.5} },
        { nome: "Fulano", notas: {ap1: 7.3, ap2: 9.2} }

    ];
    
    const [medias, setMedias] = useState([]);//criando o estado medias que é um array vazio
    const [loading, setLoading] = useState(true);//criando o estado loading que é um booleano

    useEffect(() => {//usando o hook useEffect para simular um carregamento de dados
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);

    const renderMedias = (medias) => {//função para renderizar as médias maiores que 5
        return medias.map((media, index) => {
            if(media <= 5){
                return <li key={index}>{alunos[index].nome} - {media} - Aprovado!</li>
            }
        });
    }

    return(
        <>
            <h1>Questão 01 - X</h1>
            {loading ? (//se o loading for true, irá mostrar a mensagem "Carregando..."
                <p>Carregando...</p>
            ) : (//se o loading for false, irá mostrar o componente Questao01Y, o botão para calcular as médias e as médias
                <>
                    <Questao01Y alunos={alunos} setMedias={setMedias} />
                    <ul>
                        {renderMedias(medias)}
                    </ul>
                </>
            )}
        </>
    );//se o loading for true, irá mostrar a mensagem "Carregando...", se o loading for false, irá mostrar o componente Questao01Y, o botão para calcular as médias e as médias
};

//logica do programa: mando do Questao01Y o meu array de alunos e a função setMedias, que irá setar o estado medias com as medias do array de medias de alunos, dentro do useEffect,
//e dentro do Questao01X tenho uma funcao que irá renderizar as medias maiores que 5.
const Questao01Y = ({ alunos, setMedias }) => {
    useEffect(() => {
        setMedias(calcularMedias());
    }, []);
    const calcularMedias = () => {
        const medias = alunos.map(aluno => {
            const media = (aluno.notas.ap1 + aluno.notas.ap2) / 2;
            return media;
        });
        return medias;
    }
    return null;
}

export default Questao01X;