"use strict";
const usersFullNameEl = document.querySelectorAll(".name");
const usersUserNameEl = document.querySelectorAll(".username");
const usersEmailEl = document.querySelectorAll(".email");
const users = [];
const request = fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
    return response.json();
})
    .then((data) => {
    users.push(data);
    drawUser(users);
});
// console.log(request);
function drawUser([users]) {
    console.log(users);
    for (let i = 0; i < users.length; i++) {
        usersFullNameEl[i].textContent = users[i].name;
        usersUserNameEl[i].textContent = users[i].username;
        usersEmailEl[i].textContent = users[i].email;
    }
}
