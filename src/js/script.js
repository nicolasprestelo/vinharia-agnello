alert("Seja bem-vindo à Vinharia Agnello");
alert("Para realizar o cadastro do vinho, forneça as informações a seguir.");

// Coleta de Dados
let nomeVinho = prompt("Digite o nome do vinho:");
let tipoVinho = prompt("Digite o tipo do vinho (Tinto, Branco ou Rosé):");
let safraVinho = parseInt(prompt("Digite a safra do vinho (ano):"));
let quantidadeEstoque = parseInt(prompt("Digite a quantidade em estoque:"));

// Confirmação
alert("Cadastro realizado! Veja os detalhes no console.");

// Aviso ao usuário
alert("As informações do vinho podem ser encontradas no console.");

// Exibição das informações
console.log("===== Vinho Cadastrado =====");
console.log(`Nome do vinho: ${nomeVinho}`);
console.log(`Tipo: ${tipoVinho}`);
console.log(`Safra: ${safraVinho}`);
console.log(`Quantidade em estoque: ${quantidadeEstoque}`);
console.log("=============================");