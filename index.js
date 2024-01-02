//High Order Function ou Função de Alta Ordem, são funções que recebem outras funções como parâmetro.
let a = 0;
let b = 0;
let opcao = "";
//Criando função mais externa
function executarOperacao(conta,a,b){//neste caso, o primeiro argumento guardará um espaço na memória a ser substituido posteriormente.
    return conta(a,b)//função que retorna uma outra função = high order function.
};

//Criando funções que substituirão o parâmetro "conta" na função "executarOperacao"
function soma(a,b){
    return a+b
};

function subtrair(a,b){
    return a-b
};

function multiplicar(a,b){
    return a*b
};

function dividir(a,b){
    return a/b
};

do{
opcao = prompt("Olá, seja bem vindo ao nosso programa, digite continuar ou sair para prosseguir").toLowerCase()
if(opcao==="continuar"){
    a = parseFloat(prompt("Digite o seu primeiro número para ver o resultado de suas operações: "));
    b = parseFloat(prompt("Digite o seu segundo número para ver o resultado de suas operações: "));
//realizando a substituição e armazenando em variáveis
let resultadoSoma = executarOperacao(soma,a,b)

let resultadoSubttrair = executarOperacao(subtrair,a,b)

let resultadoMultiplicar = executarOperacao(multiplicar,a,b)

let resultadoDividir = executarOperacao(dividir,a,b)

//mostrando os resultados no navegador
console.log("A soma de "+a+" e "+b+" é "+resultadoSoma);
console.log("A subtração de "+a+" e "+b+" é "+resultadoSubttrair);
console.log("A multiplicação de "+a+" e "+b+" é "+resultadoMultiplicar);
console.log("A divisão de "+a+" e "+b+" é "+resultadoDividir);
}
else
{
alert("O programa está sendo encerrado.")
}

}while(opcao!=="sair")