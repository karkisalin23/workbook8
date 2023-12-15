function fetchAllToDos() {
  fetch("http://localhost:8083/api/todos")
    .then((response) => response.json())
    .then((todos) => {
      const todoList = document.getElementById("todoList");
      todoList.innerHTML = "";

      todos.forEach((todo) => {
        const row = document.createElement("tr");
        const idCell = document.createElement("td");
        const descriptionCell = document.createElement("td");
        const deadlineCell = document.createElement("td");

        idCell.textContent = todo.id;
        descriptionCell.textContent = todo.description;
        deadlineCell.textContent = todo.deadline;

        row.appendChild(idCell);
        row.appendChild(descriptionCell);
        row.appendChild(deadlineCell);

        todoList.appendChild(row);
      });
    })
    .catch((error) => {
      console.error("Error fetching ToDos:", error);
    });
}

fetchAllToDos();
