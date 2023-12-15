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
          const todoItem = document.createElement("div");
          todoItem.textContent = `Description: ${todo.description}, Deadline: ${todo.deadline}, Priority: ${todo.priority}`;
          todoList.appendChild(todoItem);
        });
      });
  });
}

loadTodos();
