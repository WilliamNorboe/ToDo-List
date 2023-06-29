import {todo, project} from './factories.js'

let contentDIV = document.querySelector('#content');

function loadProjects(projects){
    let projectsDIV = document.createElement("div");
    projectsDIV.classList.add("projects");
    contentDIV.appendChild(projectsDIV);

    for(let i = 0; i < projects.length; ++i){
        let curProject = document.createElement("div");
        curProject.classList.add("project");

        let ProjectTitleDiv = document.createElement("div");
        ProjectTitleDiv.classList.add("projectTitle");
        ProjectTitleDiv.textContent = projects[i].title;

        let ProjectDesDiv = document.createElement("div");
        ProjectDesDiv.classList.add("projectDes");
        ProjectDesDiv.textContent = projects[i].description;

        curProject.appendChild(ProjectTitleDiv);
        curProject.appendChild(ProjectDesDiv);


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
            todoDueDate.textContent = projects[i].todos[j].dueDate;
            todoDiv.appendChild(todoDueDate);

            list.appendChild(todoDiv);
        }

        curProject.appendChild(list);

        projectsDIV.appendChild(curProject);
    }
}

export{
    loadProjects,
}