function fetchAllToDos() {
  fetch("http://localhost:8083/api/todos")
    .then((response) => response.json())
    .then((todos) => {
      const todoList = document.getElementById("todoList");
      todoList.innerHTML = "";

      todos.forEach((todo) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const categoryCell = document.createElement("td");
        const descriptionCell = document.createElement("td");
        const deadlineCell = document.createElement("td");
        const priorityCell = document.createElement("td");

        idCell.textContent = todo.id;
        categoryCell.textContent = todo.category;
        descriptionCell.textContent = todo.description;
        deadlineCell.textContent = todo.deadline;
        priorityCell.textContent = todo.priority;

        row.appendChild(idCell);
        row.appendChild(categoryCell);
        row.appendChild(descriptionCell);
        row.appendChild(deadlineCell);
        row.appendChild(priorityCell);

        todoList.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching ToDos:", error);
    });
}

fetchAllToDos();
