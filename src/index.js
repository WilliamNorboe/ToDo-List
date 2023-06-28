import './style.css'
import {todo, project} from './factories.js'
// const todo = () => {
//      let title;
//      let description;
//      let dueDate;
//      let priority;
//      let notes;
//      let completed;
//      return{title, 
//         description, 
//         dueDate, 
//         priority, 
//         notes, 
//         completed,
//     };
// };

// const project = () => {
//     let title;
//     let description;
//     let todos = [];
//     return{title,
//         title, 
//         description,
//         todos, 
//     };
// };


let contentDIV = document.querySelector("#content");

let titleH1 = document.createElement("h1");
titleH1.textContent = "ToDo List";
contentDIV.appendChild(titleH1);

let titleH2 = document.createElement("h2");
titleH2.textContent = "Projects";
contentDIV.appendChild(titleH2);

// load the projects code here first then move to file
let defaultProject = project();
defaultProject.title = "Default";
defaultProject.description = "I am a default Project!";
let projects = [defaultProject];



