document.getElementById('getBtn').addEventListener('click', function () {
    var name = prompt("Iltimos ismingizni kiriting");
    if (name !== null && name !== "") {
        display(name);
    } else {
        alert("Yaroqli nom kiriting!");
    }
});

function display(name) {
    var display = document.getElementById('display');
    display.textContent = name;
}
