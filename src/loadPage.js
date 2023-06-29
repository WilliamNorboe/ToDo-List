import {todo, project} from './factories.js'
import {loadProjects} from './loadProjects.js'


let projects = [];

function loadPage(){
    let contentDIV = document.querySelector("#content");

    let titleH1 = document.createElement("h1");
    titleH1.textContent = "ToDo List";
    contentDIV.appendChild(titleH1);

    let titleH2 = document.createElement("h2");
    titleH2.textContent = "Projects";
    contentDIV.appendChild(titleH2);

    let newProjBtn = document.createElement("button");
    // newProjBtn.addEventListener("click");
    newProjBtn.textContent = "New Project";
    newProjBtn.addEventListener("click", ()=>{newProject()});
    contentDIV.appendChild(newProjBtn);

    // load the projects code here first then move to file

    if (!localStorage.getItem("projects")) {
        let defaultProject = project();

        defaultProject.description = "I am a default Project!";
        defaultProject.title = "Default";

        let defaultTodo = todo();
        defaultTodo.title = "Default Todo";
        defaultTodo.dueDate = "5/27"; 

        let defaultTodo2 = todo();
        defaultTodo2.title = "Default Todo";
        defaultTodo2.dueDate = "5/27"; 


        defaultProject.todos = [defaultTodo, defaultTodo2];

        projects = [defaultProject];

        

        localStorage.setItem("projects", JSON.stringify(projects));
    } else {
        projects = JSON.parse(localStorage["projects"]);
    }

    loadProjects(projects);
}


function newProject(){
    let addedProject = project();
    addedProject.title = "New Project";
    addedProject.description = "NA";

    projects.push(addedProject);
    document.querySelector(".projects").remove();

    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects(projects);
}

export{
    loadPage,
}