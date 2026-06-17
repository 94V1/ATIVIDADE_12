let estudante = prompt("Você é estudante? (responda com 'sim' ou 'nao'): ");
let idade = Number (prompt("Qual a sua idade?"));
if (estudante === "sim" || idade >= 60){
    console.log (`Você tem direito à meia entrada!`)
}
else {
    console.log(`Você paga o valor inteiro`)
}