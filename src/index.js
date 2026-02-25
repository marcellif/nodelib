const fs = require ('fs');

const caminhoArquivo = process.argv
const link = caminhoArquivo[2]; 

fs.readFile(link, 'utf-8', (erro, texto)=> {
    if (erro){
        console.log('Código de erro:', erro.code)
        return
    }
    contaPalavras(texto) 
})

function contaPalavras (texto){
    const paragrafos = extraiParagrafos(texto)
    const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
        return verificaPalavrasDuplicadas(paragrafo);
    })
  console.log(contagem);
}

function extraiParagrafos (texto){
    return texto.toLowerCase().split('\n');
}



// Remove os caracteres usando o replace e regex
function limpaPalavras(palavra){
    return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

// Divide o texto assim que achar espaço, mas antes, pega as palavras com o minimo de 3 letras, e pega como base as palavras ja filtradas
// Lista palavras também soma o que for repetindo 
function verificaPalavrasDuplicadas(texto) {
    const listaPalavras = texto.split(' ');

    const resultado = {}

    listaPalavras.forEach(palavra => {
        if (palavra.length >= 3){
            const palavraLimpa = limpaPalavras(palavra)
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0 ) + 1
        }
        
       
    });

   return resultado;
} 