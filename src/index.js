import './style.css'
import {todo, project} from './factories.js'
import {loadProjects} from './loadProjects.js'

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
let defaultTodo = todo();
defaultTodo.title = "Default Todo";
defaultTodo.dueDate = "5/27"; 

let defaultTodo2 = todo();
defaultTodo2.title = "Default Todo";
defaultTodo2.dueDate = "5/27"; 


defaultProject.todos = [defaultTodo, defaultTodo2];

let projects = [defaultProject];
projects.push(defaultProject);

loadProjects(projects);





