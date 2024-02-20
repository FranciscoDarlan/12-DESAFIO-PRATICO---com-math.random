/*

1 Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

*/

alert('BEM VINDO AO DESAFIO!!!');

console.log('BOAS VINDAS PELO CONSOLE!!');

/*

2- Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

*/
let nome = 'Darlan';

console.log(` OLÁ, ${nome} !`);

/*

3-Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

*/

alert(`OLÁ, ${nome} !`);

/*

4-Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.

*/

let linguagemEscolhida = prompt('QUAL A LINGUAGEM DE PROGRAMAÇÃO QUE VOCÊ MAIS GOSTA?'); 7
console.log(`essa é a liguagem escolhida -> ${linguagemEscolhida}`)

/*

5-Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

*/

let valor1 = 1;

let valor2 = 2;

let resultado = (valor1 + valor2);

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

/*

6-Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

*/

let valorOne = 5;

let valorTwo = 5;

let result = (valorOne - valorTwo);

console.log(`A diferaça entre ${valorOne} e ${valorTwo} é igual a ${result}.`);

/*

7-Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

*/

let idade = prompt('QUAL SUA IDADE ?');

// OPERADOR TERNARIO >>>>>
let menorMaior = idade >= 18 ? 'MAIOR' : 'MENOR';
console.log(` SUA IDADE É ${idade}, VOCÊ É ${menorMaior} DE IDADE!`)

/* if classico >>>>>>>>

if ( idade > 17 ){
    console.log(` SUA IDADE É ${idade}, VOCÊ É MAIOR DE IDADE!`);
}else{
    console.log(` SUA IDADE É ${idade}, VOCÊ É MENOR DE IDADE!`);
}
*/

/*
8-Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
*/

let numero = prompt('DIGITE UM NÚMERO POSITIVO OU NEGATIVO E TE RETORNAREI COM A RESPOSTA ..');

if (numero == 0) {
    alert(`SEU NÚMERO FOI ${numero} ZERO!`);
} else {
    if (numero < 0) {
        alert(`SEU NÚMERO FOI ${numero}, ELE É NEGATIVO`);
    } else {
        alert(`SEU NÚMERO FOI ${numero}, ELE É POSITIVO`);
    }
}

/*

9- Use um loop while para imprimir os números de 1 a 10 no console

*/

let numberStart = 0;
let numberStop = 10; // substitua o valor que deseja parar

while (numberStart < numberStop) {
    numberStart++;
    console.log(numberStart);
}
/*

10-Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

*/

let nota = prompt('QUAL NOTA VOCÊ TIROU ?');

if (nota >= 7) {
    console.log(`sua nota foi ${nota}, APROVADO(A)!`);
    alert('APROVADO(a)');
} else {
    console.log(`sua nota foi ${nota}, REPROVADO(A)!`);
    alert('REPROVADO(a)');
}
/*

11- Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

*/

let numberAleatorio = Math.random();

console.log(numberAleatorio);

/*

12-Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

*/

let numberSortInteiro = parseInt(Math.random() * 10 + 1);
console.log(numberSortInteiro);


/*
13-Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

*/

let numberSort1e1000 = parseInt(Math.random() * 1000 + 1);
console.log(numberSort1e1000);