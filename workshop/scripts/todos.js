// Fetch users and populate the dropdown
fetch("http://localhost:8083/api/users")
  .then((response) => response.json())
  .then((users) => {
    const userDropdown = document.getElementById("userDropdown");
    users.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.textContent = user.name;
      userDropdown.appendChild(option);
    });
  });

// Fetch ToDo tasks for the selected user and display them
userDropdown.addEventListener("change", () => {
  const selectedUserId = userDropdown.value;
  fetch(`http://localhost:8083/api/todos/byuser/${selectedUserId}`)
    .then((response) => response.json())
    .then((todos) => {
      const todoList = document.getElementById("todoList");
      todoList.innerHTML = "";
      todos.forEach((todo) => {
        const todoItem = document.createElement("div");
        todoItem.textContent = `Description: ${todo.description}, Deadline: ${todo.deadline}`;
        todoList.appendChild(todoItem);
      });
    });
});
