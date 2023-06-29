


const todo = () => {
    let title = "";
    let description = "";
    let dueDate = "";
    let priority = "";
    let notes = "";
    let completed = false;
    return{title, 
       description, 
       dueDate, 
       priority, 
       notes, 
       completed,
   };
};

const project = () => {
   let title = "";
   let description = "";
   let todos = [];
   return{title,
       title, 
       description,
       todos, 
   };
};

export{
    todo,
    project
}