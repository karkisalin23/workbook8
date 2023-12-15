function loadTodos() {
  const userDropdown = document.getElementById("userDropdown");
  const todoList = document.getElementById("todoList");

  // Fetch users and populate dropdown
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

  // Event listener for user selection
  userDropdown.addEventListener("change", () => {
    const selectedUserId = userDropdown.value;

    // Fetch todos for the selected user
    fetch(`http://localhost:8083/api/todos/byuser/${selectedUserId}`)
      .then((response) => response.json())
      .then((todos) => {
        // Clear previous todoList content
        todoList.innerHTML = "";

        // Display todos in the todoList
        todos.forEach((todo) => {
          const todoItem = document.createElement("div");
          todoItem.textContent = `Description: ${todo.description}, Deadline: ${todo.deadline}, Priority: ${todo.priority}`;
          todoList.appendChild(todoItem);
        });
      });
  });
}

loadTodos();
