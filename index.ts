#! /usr/bin/env node

import inquirer  from "inquirer";
import figlet from "figlet";
import chalk from "chalk";


console.log(chalk.blue(
    figlet.textSync("Calculator!", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  ));
let first = await inquirer.prompt({
            name: "val1",
            type: "number",
            message: "Enter first Value: "
        });
inquirer.prompt({
    name: "sign",
    type: "list",
    message: "Enter Sign Value: ",
    choices : [{name: "+", value : 0},{name:"-",value:1},{name:"*",value:2},{name:"/",value:3}]
}).then((responses)=>{
    if (responses.sign===0) {
        inquirer.prompt({
            name:"val2",
            type:"number",
            message:"Enter 2nd Number:"
        }).then(annwer=>{
            console.log(first.val1+annwer.val2);
        });
    }
    else if (responses.sign===1) {
        inquirer.prompt({
            name:"val2",
            type:"number",
            message:"Enter 2nd Number:"
        }).then(annwer=>{
            console.log(first.val1-annwer.val2);
        });
    }
    else if(responses.sign===2)
    {
        inquirer.prompt({
            name:"val2",
            type:"number",
            message:"Enter 2nd Number:"
        }).then(annwer=>{
            console.log(first.val1*annwer.val2);
        });
    }
    else if(responses.sign===3)
    {
        inquirer.prompt({
            name:"val2",
            type:"number",
            message:"Enter 2nd Number:"
        }).then(annwer=>{
            console.log(first.val1/annwer.val2);
        });
    }
     else {
        console.log("Please Choose Correct Option");   
    }
});
