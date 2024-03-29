const form = document.querySelector(".form");
const formPassword = document.querySelector(".form__password");
const formUsername = document.querySelector(".form__username");
const API = "https://fakestoreapi.com/auth/login";

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let user = {
    username: formUsername.value,
    password: formPassword.value,
  };
  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
});
