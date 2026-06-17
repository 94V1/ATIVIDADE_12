let salarioBruto = Number(prompt("Digite o seu salário bruto (R$): "));
let valorParcela = Number(prompt("Digite o valor da parcela solicitada (R$): "));
let limiteParcela = salarioBruto * 0.30;
if (valorParcela <= limiteParcela) {
    console.log("Crédito Aprovado!");
} 
else {
    console.log("Crédito Recusado!");
}