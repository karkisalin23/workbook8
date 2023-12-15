// Fetch users and populate the user dropdown
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

// Fetch categories and populate the category dropdown
fetch("http://localhost:8083/api/categories")
  .then((response) => response.json())
  .then((categories) => {
    const categoryDropdown = document.getElementById("categoryDropdown");
    categories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category.name;
      option.textContent = category.name;
      categoryDropdown.appendChild(option);
    });
  });

// Function to add a new ToDo task
function addTodo() {
  const form = document.getElementById("newTodoForm");
  const formData = new FormData(form);

  fetch("http://localhost:8083/api/todos", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("New ToDo added:", data);
    })
    .catch((error) => {
      console.error("Error adding ToDo:", error);
    });
}
