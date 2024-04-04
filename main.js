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
            let addtodos = await inquirer.prompt({
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
            const newTodos = todos.filter((val) => val !== updateTodo.todo);
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
            const removeTodo = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...removeTodo];
            console.log(todos);
            break;
        case "exit":
            stopLoop = true;
            console.log("Bye!");
            break;
    }
}
// async function createTodo(todos: string[]) {
//   do {
//     let ans = await inquirer.prompt({
//       type: "list",
//       name: "select",
//       message: "select an operation ",
//       choices: ["add", "read", "update", "delete"],
//     });
//     if (ans.select == "add") {
//       let addTodo = await inquirer.prompt({
//         type: "input",
//         name: "TODO",
//         message: "What do you want to add in todos?",
//     });
//       todos.push(addTodo.TODO);
//       console.log(addTodo, todos);
//     }
//     if (ans.select == "update") {
//       let updateTodo = await inquirer.prompt({
//         type: "list",
//         name: "TODO",
//         message: "Select items to update",
//         choices: todos.map((item) => item),
//       });
//       let addTodo = await inquirer.prompt({
//         type: "input",
//         name: "TODO",
//         message: "Add items..",
//       });
//       let newTodos = todos.filter((val) => val !== updateTodo.todo);
//       todos = [...newTodos, addTodo.TODO];
//       console.log(todos);
//     }
//     if (ans.select == "read") {
//       console.log(todos);
//     }
//     if (ans.select == "delete") {
//       let deleteTodo = await inquirer.prompt({
//         type: "list",
//         name: "TODO",
//         message: "Select items to delete",
//         choices: todos.map((item) => item),
//       });
//       let removeTodo = todos.filter((val) => val !== deleteTodo.todo);
//       todos = [...removeTodo ];
//       console.log(todos);
//     }
//   }while (true)
// }
// createTodo(todos);
// // // let loop = true;
// // while(loop){
// //     const answers: {
// //         TODO: string,
// //         addmore: boolean,
// //     }= await inquirer.prompt([
// //         {
// //             type: "input",
// //             name: "TODO",
// //             message: "What do you want to add in your todos? "
// //         },
// //         {
// //             type: "confirm",
// //             name: "addmore",
// //             message: "Do you want to add more todos? ",
// //             default: false
// //         }
// //     ])
// //     const {TODO, addmore} = answers;
// //     console.log(answers)
// //     loop = addmore
// //     if(TODO) {
// //       todos.push(TODO)
// //     } else {
// //         console.log("Kindly add valid input")
// //     }
// // }
// // // console.log(todos)
// // if(todos.length > 0){
// //     console.log("Your TOdo list: ")
// //     todos.forEach(todo => {
// //         console.log(todo)
// //     });
// // }else {
// //     console.log("No todos found")
// // }
// let stopLoop = false;
// while (!stopLoop) {
//   const answers = await inquirer.prompt([
//     {
//       type: "input",
//       name: "TODO",
//       message: "What do you want to add in your todos? "
//     },
//     {
//       type: "confirm",
//       name: "addmore",
//       message: "Do you want to add more todos? ",
//       default: false
//     },
//     {
//       type: "list",
//       name: "select",
//       message: "select an operation ",
//       choices: ["add", "read", "update", "delete", "exit"],
//     }
//   ]);
//   switch (answers.select) {
//     case "add":
//       let addTodo = await inquirer.prompt({
//         type: "input",
//         name: "TODO",
//         message: "What do you want to add in todos?"
//       });
//       todos.push(addTodo.TODO);
//       console.log(addTodo, todos);
//       break;
//     case "update":
//       const updateTodo = await inquirer.prompt({
//         type: "list",
//         name: "TODO",
//         message: "Select items to update",
//         choices: todos.map((item) => item)
//       });
//       const addTodo = await inquirer.prompt({
//         type: "input",
//         name: "TODO",
//         message: "Add items.."
//       });
//       const newTodos = todos.filter((val) => val!== updateTodo.todo);
//       todos = [...newTodos, addTodo.TODO];
//       console.log(todos);
//       break;
//     case "read":
//       console.log(todos);
//       break;
//     case "delete":
//       const deleteTodo = await inquirer.prompt({
//         type: "list",
//         name: "TODO",
//         message: "Select items to delete",
//         choices: todos.map((item) => item)
//       });
//       const removeTodo = todos.filter((val) => val!== deleteTodo.todo);
//       todos = [...removeTodo];
//       console.log(todos);
//       break;
//     case "exit":
//       stopLoop = true;
//       console.log("Bye!");
//       break;
//   }
// }
