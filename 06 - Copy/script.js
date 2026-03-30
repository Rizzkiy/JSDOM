function updateDisplay() {
    const title = document.querySelector("#main-title");
    const desc = document.querySelector("#description");

    title.innerHTML = "My Todo List"; 
    desc.innerHTML = "Daftar tugas harian saya:"; 

    desc.style.color = "#000000";
    desc.style.fontStyle = "italic";
    desc.style.fontWeight = "bold";
}

function addTask() {
    const list = document.querySelector("#todo-list");
    
    const newTask = document.createElement("li");
    newTask.innerHTML = "Mengerjakan Modul 6";

    newTask.addEventListener("click", function() {
        newTask.classList.toggle("completed");
    });

    newTask.setAttribute("class", "highlight");

    list.appendChild(newTask);
}