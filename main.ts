#! /usr/bin/env Node

import inquirer from 'inquirer';

let todos: string[]=[""]
let loop = true;

while(loop){
    const answers: {
        TODO: string,
        addmore: boolean,
    }= await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo list? "
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todo list? ",
            default: false
        }
    ])
    const {TODO, addmore} = answers;
    console.log(answers)
    loop = addmore
    if(TODO) {
      todos.push(TODO)
    } else {
        console.log("Kindly add valid input")
    }

}

// console.log(todos)

if(todos.length > 0){
    console.log("Your TOdo list: ")
    todos.forEach(todo => {
        console.log(todo)
    });
}else {
    console.log("No todos found")
}