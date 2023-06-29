import {todo, project} from './factories.js'
import {loadProjects, removeAllChildNodes} from './loadProjects.js'

function view(todoDiv, projects, i, j){
    removeAllChildNodes(todoDiv);
    todoDiv.classList.remove("todo");
    todoDiv.classList.add("todo2");

    let tLabel = document.createElement("label");
    tLabel.textContent = "Title: ";
    todoDiv.appendChild(tLabel);
    let title = document.createElement("p");
    title.textContent = projects[i].todos[j].title;
    todoDiv.appendChild(title);

    let dLabel = document.createElement("label");
    dLabel.textContent = "Description: ";
    todoDiv.appendChild(dLabel);
    let description = document.createElement("p");
    description.textContent = projects[i].todos[j].description;
    todoDiv.appendChild(description);

    let ddLabel = document.createElement("label");
    ddLabel.textContent = "Due Date: ";
    todoDiv.appendChild(ddLabel);
    let dueDate = document.createElement("p");
    dueDate.textContent = projects[i].todos[j].dueDate;
    todoDiv.appendChild(dueDate);

    let nLabel = document.createElement("label");
    nLabel.textContent = "Notes: ";
    todoDiv.appendChild(nLabel);
    let notes = document.createElement("p");
    notes.textContent = projects[i].todos[j].notes;
    todoDiv.appendChild(notes);

    let cLabel = document.createElement("label");
    cLabel.textContent = "Completed: ";
    todoDiv.appendChild(cLabel);
    let completed = document.createElement("p");
    completed.textContent = projects[i].todos[j].completed;
    todoDiv.appendChild(completed);

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.addEventListener("click", () => {
        document.querySelector(".projects").remove();
        loadProjects(projects);
    });
    todoDiv.appendChild(closeButton);
}

export{
    view,
}