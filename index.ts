#! /usr/bin/env node

import inquirer from "inquirer";

// step 1 currency conversion rates

// In PKR

let conversion ={
    "PKR": {
        "USD":0.0036,
        "GBP":0.0037,
        "PKR":1
    },

// In GBP
"GBP": {
    "USD":1.12,
    "PKR":200,
    "GBP":1
},

// In DOLLAR
"USD": {
    "PKR":277.58,
    "GBP":0.83,
    "USD":1
}
}

// step 2 : Using Inquirer

const answer :{
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",

//  datatype declared
amount:number
} = await inquirer.prompt(
    [
        {
            type:"list",
            name:"from",
            choices:["PKR","USD","GBP"],
            message:"Select your currency..?"
        },
        {
            type:"list",
            name:"to",
            choices:["PKR","USD","GBP"],
            message:"Select your conversion currency"
        },
        // conversion amount
        {
            type:"number",
            name:"amount",
            message:"Enter your conversion amount"
        }
    ]
)

// step 3 : output

const{from,to,amount}=answer;

// check input in given programs

if(from && to && amount){
    // formula
    let result = conversion [from][to] * amount
    console.log(`your conversion from ${from} to${to} is ${result}`)

} else {
    // generate error
    console.log("Invalid input")
}