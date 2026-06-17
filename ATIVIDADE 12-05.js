let usuario = prompt("Digite o nome de usuário: ")
let senha = prompt("Digite a senha: ")
if (usuario === "admin" && senha === "senai123") {
    console.log (`Acesso concedido, bem vindo(a)!`)
}
else {
    console.log (`Acesso negado, usuário ou senha incorretos`)
}