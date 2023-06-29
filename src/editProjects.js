import {todo, project} from './factories.js'
import {loadProjects, removeAllChildNodes} from './loadProjects.js'


function editProject(projects, i, projectInfo){
    console.log("me");
    removeAllChildNodes(projectInfo);
    // projectInfo.remove("todo");
    // todoDiv.classList.add("todo2");

    let tLabel = document.createElement("label");
    tLabel.textContent = "Title: ";
    projectInfo.appendChild(tLabel);
    let title = document.createElement("input");
    title.type = "text";
    title.value = projects[i].title;
    projectInfo.appendChild(title);

    let dLabel = document.createElement("label");
    dLabel.textContent = "Description: ";
    projectInfo.appendChild(dLabel);
    let description = document.createElement("textarea");
    description.value = projects[i].description;
    projectInfo.appendChild(description);

    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.addEventListener("click", () => {
        projects[i].title= title.value;
        projects[i].description = description.value;

        document.querySelector(".projects").remove();
        localStorage.setItem("projects", JSON.stringify(projects));
        loadProjects(projects);
    });
    projectInfo.appendChild(saveButton);
}

export{
    editProject,
}