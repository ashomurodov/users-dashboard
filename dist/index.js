"use strict";
const usersFullNameEl = document.querySelectorAll(".name");
const usersUserNameEl = document.querySelectorAll(".username");
const usersEmailEl = document.querySelectorAll(".email");
const usersAddressEl = document.querySelectorAll(".address");
const userDeleteEl = document.querySelectorAll(".delete");
const tableEl = document.querySelectorAll(".tableElement");
const usersIdEl = document.querySelectorAll(".id");
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
        usersAddressEl[i].textContent = users[i].address.city;
    }
}
userDeleteEl.forEach((deleteEl, idx) => {
    deleteEl.addEventListener("click", (e) => {
        e.stopPropagation();
        tableEl[idx].classList.add("none");
        usersIdEl[idx].classList.remove("id");
        editTableId();
    });
});
function editTableId() {
    let number = 1;
    const tableIdEl = document.querySelectorAll(".id");
    for (let id of tableIdEl) {
        id.textContent = `${number++}`;
    }
}
