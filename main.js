#! /usr/bin/env Node
import inquirer from "inquirer";
let todos = [""];
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
            // Prompt the user to select an item to add
            const addtodos = await inquirer.prompt({
                type: "input",
                name: "TODO",
                message: "What do you want to add in todos?"
            });
            todos.push(addtodos.TODO);
            console.log(addtodos, todos);
            break;
        case "update":
            // Prompt the user to select an item to update
            const updateTodo = await inquirer.prompt({
                type: "list",
                name: "TODO",
                message: "Select items to update",
                choices: todos.map((item) => item)
            });
            // Prompt the user to enter the updated item
            const addTodo = await inquirer.prompt({
                type: "input",
                name: "TODO",
                message: "Add items.."
            });
            // Create a new array that includes the updated item
            // const newTodos = todos.filter((todo) => todo!== updateTodo.todo);
            // // todos = [...newTodos, addTodo.TODO];
            // newTodos.push(addTodo.todo);
            // console.log(`updated todos: ${todos}`);
            // // console.log(todos);
            const newTodos = todos.filter((todo) => todo !== updateTodo.todo);
            newTodos.push(addTodo.TODO);
            console.log(`Updated todos: ${newTodos}`);
            break;
        case "read":
            console.log(todos);
            break;
        case "delete":
            const deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "Select an item to delete:",
                choices: todos,
            });
            // Create a new array that excludes the selected item
            const filteredTodos = todos.filter((todo) => todo !== deleteTodo.todo);
            console.log(`Remaining todos: ${filteredTodos}`);
            break;
        case "exit":
            stopLoop = true;
            console.log("Bye!");
            break;
    }
}
