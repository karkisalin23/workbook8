fetch("http://localhost:3000/users/14", {
  method: "DELETE",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (user) {
    console.log(user);
  });
