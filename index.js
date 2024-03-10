#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var figlet_1 = require("figlet");
var chalk_1 = require("chalk");
console.log(chalk_1.default.blue(figlet_1.default.textSync("Calculator!", {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
})));
var first = await inquirer_1.default.prompt({
    name: "val1",
    type: "number",
    message: "Enter first Value: "
});
inquirer_1.default.prompt({
    name: "sign",
    type: "list",
    message: "Enter Sign Value: ",
    choices: [{ name: "+", value: 0 }, { name: "-", value: 1 }, { name: "*", value: 2 }, { name: "/", value: 3 }]
}).then(function (responses) {
    if (responses.sign === 0) {
        inquirer_1.default.prompt({
            name: "val2",
            type: "number",
            message: "Enter 2nd Number:"
        }).then(function (annwer) {
            console.log(first.val1 + annwer.val2);
        });
    }
    else if (responses.sign === 1) {
        inquirer_1.default.prompt({
            name: "val2",
            type: "number",
            message: "Enter 2nd Number:"
        }).then(function (annwer) {
            console.log(first.val1 - annwer.val2);
        });
    }
    else if (responses.sign === 2) {
        inquirer_1.default.prompt({
            name: "val2",
            type: "number",
            message: "Enter 2nd Number:"
        }).then(function (annwer) {
            console.log(first.val1 * annwer.val2);
        });
    }
    else if (responses.sign === 3) {
        inquirer_1.default.prompt({
            name: "val2",
            type: "number",
            message: "Enter 2nd Number:"
        }).then(function (annwer) {
            console.log(first.val1 / annwer.val2);
        });
    }
    else {
        console.log("Please Choose Correct Option");
    }
});
