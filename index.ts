#! //usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgRed("\n\t Welcome to MAHAM _Currency_Converter_\n"))

//define the list of currency converter and thier exchange rate

let exchange_rate: any ={
          "USD": 1,  ///Base curency
          "EUR":0.9, //European currency (euro)
          "JYP": 113, //Japenease currency (yen)
          "CAD": 1.3,  //Canadian dollar
          "AUD":1.65, //Australlian dollar
          "PKR":277.54, //Pakistan currency

}

//PROMPT THE USER SELECT CURRENCIES TO CONVERT FROM AND TO
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Slect the currency to convert form:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"],
    },
    {
        name:"to_currency",
        type:"list",
        message:"Select currency to convert into:",
        choices:["USD","EUR","JYP","CAD","AUD","PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
])
//perform currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency]
let to_amount = exchange_rate[user_answer.to_currency]
let amount = user_answer.amount

//formulas of conversion
let base_amount = amount / from_amount
let converted_amount = base_amount * to_amount

//display the converted amount
console.log(chalk.yellow(`Converted Amount = ${chalk.green.bold(converted_amount.toFixed(2))}`))