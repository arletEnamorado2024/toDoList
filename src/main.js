class Task {
    constructor(title, description) {
        this.title = title;
        this.description = description;
        this.completed = false;
    }

    // Método para completar la tarea
    complete() {
        this.completed = true;
    }

    // Método para descompletar la tarea
    uncomplete() {
        this.completed = false;
    }
}

const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const tasks = []; // Array para almacenar las tareas

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskTitle = document.getElementById("task-title").value;
    const taskDescription = document.getElementById("task-description").value;

    if (taskTitle.trim() === "") {
        alert("El título de la tarea no puede estar vacío.");
        return;
    }

    const newTask = new Task(taskTitle, taskDescription);
    tasks.push(newTask);

    // Crear un elemento de lista para la tarea
    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <h3>${newTask.title}</h3>
        <p>${newTask.description}</p>
        <button class="complete-button">Completar</button>
        <button class="delete-button">Eliminar</button>
    `;

    // Agregar la tarea a la lista
    taskList.appendChild(taskItem);

    // Limpiar el formulario
    taskForm.reset();

    // Agregar event listeners a los botones de completar y eliminar
    const completeButton = taskItem.querySelector(".complete-button");
    const deleteButton = taskItem.querySelector(".delete-button");

    completeButton.addEventListener("click", () => {
        newTask.complete();
        // Puedes realizar acciones adicionales aquí, como cambiar el estilo de la tarea completada.
    });

    deleteButton.addEventListener("click", () => {
        const taskIndex = tasks.indexOf(newTask);
        if (taskIndex !== -1) {
            tasks.splice(taskIndex, 1);
        }
        taskList.removeChild(taskItem);
    });
});
