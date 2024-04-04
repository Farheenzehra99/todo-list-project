#! /usr/bin/env Node

import inquirer from "inquirer";

let todos: string[] = [""];
let stopLoop = false;

while (!stopLoop) {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "TODO",
      message: "What do you want to add in your todos? "
    },
    {
      type: "confirm",
      name: "addmore",
      message: "Do you want to add more todos? ",
      default: false
    },
    {
      type: "list",
      name: "select",
      message: "select an operation ",
      choices: ["add", "read", "update", "delete", "exit"],
    }
  ]);

  switch (answers.select) {
    case "add":
        const addtodos = await inquirer.prompt({
            type: "input",
            name: "TODO",
            message: "What do you want to add in todos?"
          });
          todos.push(addtodos.TODO);
          console.log(addtodos, todos);
          break;
        case "update":
          const updateTodo = await inquirer.prompt({
            type: "list",
            name: "TODO",
            message: "Select items to update",
            choices: todos.map((item) => item)
          });
          const addTodo = await inquirer.prompt({
            type: "input",
            name: "TODO",
            message: "Add items.."
          });
          const newTodos = todos.filter((val) => val!== updateTodo.todo);
          todos = [...newTodos, addTodo.TODO];
          console.log(todos);
          break;
        case "read":
          console.log(todos);
          break;
        case "delete":
          const deleteTodo = await inquirer.prompt({
            type: "list",
            name: "TODO",
            message: "Select items to delete",
            choices: todos.map((item) => item)
          });
          const removeTodo = todos.filter((val) => val!== deleteTodo.todo);
          todos = [...removeTodo];
          console.log(todos);
          break;
        case "exit":
          stopLoop = true;
          console.log("Bye!");
          break;
      }
    }
    