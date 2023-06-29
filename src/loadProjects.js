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
            todoDueDate.textContent = "Due: " + projects[i].todos[j].dueDate;
            todoDiv.appendChild(todoDueDate);

            let expandButton = document.createElement("button");
            expandButton.textContent = "Expand";
            todoDiv.appendChild(expandButton);

            expandButton.addEventListener("click", ()=>{expand(todoDiv, projects, i, j)});
            list.appendChild(todoDiv);
        }

        curProject.appendChild(list);

        projectsDIV.appendChild(curProject);
    }
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function expand(todoDiv, projects, i, j){
    removeAllChildNodes(todoDiv);
    todoDiv.classList.remove("todo");
    todoDiv.classList.add("todo2");

    let tLabel = document.createElement("label");
    tLabel.textContent = "Title: ";
    todoDiv.appendChild(tLabel);
    let title = document.createElement("input");
    title.type = "text";
    title.value = projects[i].todos[j].title;
    todoDiv.appendChild(title);

    let dLabel = document.createElement("label");
    dLabel.textContent = "Description: ";
    todoDiv.appendChild(dLabel);
    let description = document.createElement("textarea");
    description.value = projects[i].todos[j].description;
    todoDiv.appendChild(description);

    let ddLabel = document.createElement("label");
    ddLabel.textContent = "Due Date: ";
    todoDiv.appendChild(ddLabel);
    let dueDate = document.createElement("input");
    dueDate.type = "text";
    dueDate.value = projects[i].todos[j].dueDate;
    todoDiv.appendChild(dueDate);

    let nLabel = document.createElement("label");
    nLabel.textContent = "Notes: ";
    todoDiv.appendChild(nLabel);
    let notes = document.createElement("textarea");
    notes.value = projects[i].todos[j].notes;
    todoDiv.appendChild(notes);

    let cLabel = document.createElement("label");
    cLabel.textContent = "Completed: ";
    todoDiv.appendChild(cLabel);
    let completed = document.createElement("input");
    completed.type = "checkbox";
    completed.checked = projects[i].todos[j].completed;
    todoDiv.appendChild(completed);

    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        projects[i].todos[j].title = title.value;
        projects[i].todos[j].description = description.value;
        projects[i].todos[j].dueDate = dueDate.value;
        projects[i].todos[j].notes = notes.value;
        projects[i].todos[j].completed = completed.checked;

        document.querySelector(".projects").remove();
        loadProjects(projects);
    });
    todoDiv.appendChild(saveButton);
}

// let title;
// let description;
// let dueDate;
// let priority;
// let notes;
// let completed;

export{
    loadProjects,
}