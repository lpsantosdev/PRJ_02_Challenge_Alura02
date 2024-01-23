
//Chalenge 02
alert("Welcome to the 2nd challenge of Alura OneTeam Training")
//Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
alert("01 - Day of the week");
let varDayOfWeek = prompt("Hi user, what day of the week is today?");
if(varDayOfWeek == "saturday" || varDayOfWeek == "sunday")  {
    alert("Have a good weekend!");
}
else{
    alert("Have a good week!");
}

//Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
alert("02 - Number - positive or negative");
let varNumber = prompt("Please, type a random number");
if(varNumber < 0){
    alert("The number inputted is negative");
}
else{
    alert("The number inputted is positive");
}

//Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
alert("03 - Score game");
let userScore = prompt("Type your game score:");
if(userScore >= 100) {
alert("Congratulations, You won! Your score were so high!");
}
else{
alert("Sorry, you lost this time, try it again.");
}

//Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
alert("04 - Account balance");
let varBalance = 5000;
let varUserName = prompt("Please, insert your name: ");
let varAccountNumber = prompt("Please, insert your number account: ");
alert(`Welcome, ${varUserName}, following your account details and balance will be shown...`);
alert(`Name: ${varUserName} \nAccount: ${varAccountNumber} \nAccount Balance: ${varBalance}`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
alert("05 - Welcome user");
let varUserName2 = prompt("Please, insert your name: ");
alert(`Welcome, ${varUserName2}! The system is available.`);