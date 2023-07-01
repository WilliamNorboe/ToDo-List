import {todo, project} from './factories.js'
import {edit} from './editTodo.js'
import {view} from './viewProject.js'
import {editProject} from './editProjects.js'

let contentDIV = document.querySelector('#content');

function loadProjects(projects){
    let projectsDIV = document.createElement("div");
    projectsDIV.classList.add("projects");
    contentDIV.appendChild(projectsDIV);

    for(let i = 0; i < projects.length; ++i){

        let projectInfo = document.createElement("p");
        projectInfo.classList.add("pinfo");

        let curProject = document.createElement("div");
        curProject.classList.add("project");

        let ProjectTitleDiv = document.createElement("div");
        ProjectTitleDiv.classList.add("projectTitle");
        ProjectTitleDiv.textContent = projects[i].title;



        let projectButtons = document.createElement('div');
        projectButtons.classList.add("projectButtons");

        let editProjectBtn = document.createElement("button");
        editProjectBtn.textContent = "Edit Project";
        projectButtons.appendChild(editProjectBtn);

        let removeProjectBtn = document.createElement("button");
        removeProjectBtn.textContent = "Remove Project";
        projectButtons.appendChild(removeProjectBtn);

        ProjectTitleDiv.appendChild(projectButtons);

        let ProjectDesDiv = document.createElement("div");
        ProjectDesDiv.classList.add("projectDes");
        ProjectDesDiv.textContent ="-" + projects[i].description;

        editProjectBtn.addEventListener("click", ()=>{editProject(projects, i, projectInfo)});
        removeProjectBtn.addEventListener("click", ()=> removeProject(projects, i));
        projectInfo.appendChild(ProjectTitleDiv);
        projectInfo.appendChild(ProjectDesDiv);

        curProject.appendChild(projectInfo);


        let list = document.createElement("ul");
        for(let j = 0; j < projects[i].todos.length; ++j){
            let todoDiv = document.createElement("div");
            todoDiv.classList.add("todo");

            let todoTitleDiv = document.createElement("div");
            todoTitleDiv.classList.add("todoTitle");
            todoTitleDiv.textContent = projects[i].todos[j].title;
            todoDiv.appendChild(todoTitleDiv);

            let todoDueDate = document.createElement("div");
            todoDueDate.classList.add("todoDueDate");
            todoDueDate.textContent = "Due: " + projects[i].todos[j].dueDate;
            todoDiv.appendChild(todoDueDate);


            let todoButtons = document.createElement('div');
            todoButtons.classList.add("todoButtons");

            let editButton = document.createElement("button");
            editButton.textContent = "Edit";
            todoButtons.appendChild(editButton);
            editButton.addEventListener("click", ()=>{edit(todoDiv, projects, i, j)});

            let viewButton = document.createElement("button");
            viewButton.textContent = "View";
            todoButtons.appendChild(viewButton);
            viewButton.addEventListener("click", ()=>{view(todoDiv, projects, i, j)});

            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            todoButtons.appendChild(removeButton);
            removeButton.addEventListener("click", ()=>{removeTodo(todoDiv, projects, i, j)});

            todoDiv.appendChild(todoButtons);

            list.appendChild(todoDiv);
        }
        curProject.appendChild(list);

        let addTodoBtn = document.createElement("button");
        addTodoBtn.textContent = "Add Todo";
        curProject.append(addTodoBtn);
        addTodoBtn.addEventListener("click", ()=>{addTodo(projects, i)});
        projectsDIV.appendChild(curProject);
    }
}


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function addTodo(projects, i){
    let addedTodo = todo();
    addedTodo.title = "New Todo";
    addedTodo.dueDate = "NA";

    projects[i].todos.push(addedTodo);
    document.querySelector(".projects").remove();
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects(projects);
}


function removeTodo(todoDiv, projects, i, j){
    projects[i].todos.splice(j, 1);
    document.querySelector(".projects").remove();
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects(projects);
}

function removeProject(projects, i){
    projects.splice(i, 1);
    document.querySelector(".projects").remove();
    localStorage.setItem("projects", JSON.stringify(projects));
    loadProjects(projects);
}

export{
    loadProjects,
    removeAllChildNodes,
}