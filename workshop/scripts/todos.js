function loadTodos() {
  const userDropdown = document.getElementById("userDropdown");
  const todoList = document.getElementById("todoList");

  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user) => {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = user.name;
        userDropdown.appendChild(option);
      });
    });

  userDropdown.addEventListener("change", () => {
    const selectedUserId = userDropdown.value;

    fetch(`http://localhost:8083/api/todos/byuser/${selectedUserId}`)
      .then((response) => response.json())
      .then((todos) => {
        todoList.innerHTML = "";

        todos.forEach((todo) => {
          const row = document.createElement("tr");
          const categoryCell = document.createElement("td");
          const descriptionCell = document.createElement("td");
          const deadlineCell = document.createElement("td");
          const priorityCell = document.createElement("td");

          categoryCell.textContent = todo.category;
          descriptionCell.textContent = todo.description;
          deadlineCell.textContent = todo.deadline;
          priorityCell.textContent = todo.priority;

          row.appendChild(categoryCell);
          row.appendChild(descriptionCell);
          row.appendChild(deadlineCell);
          row.appendChild(priorityCell);

          todoList.appendChild(row);
        });
      });
  });
}

loadTodos();
