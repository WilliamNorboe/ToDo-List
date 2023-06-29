import {todo, project} from './factories.js'
import {loadProjects, removeAllChildNodes} from './loadProjects.js'


function edit(todoDiv, projects, i, j){
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
        localStorage.setItem("projects", JSON.stringify(projects));
        loadProjects(projects);
    });
    todoDiv.appendChild(saveButton);
}

export{
    edit,
}