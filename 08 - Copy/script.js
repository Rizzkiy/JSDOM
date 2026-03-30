const input = document.querySelector("#input input");
const list = document.getElementById("list");
const form = document.querySelector("#input");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let taskText = input.value.trim();

    if (taskText === "") {
        alert("Tugas tidak boleh kosong");
        return;
    }

    let taskItem = document.createElement("div");
    taskItem.classList.add("task-item");

    taskItem.innerHTML = `
        <div>
            <input type="checkbox" class="task-check">
            <label>${taskText}</label>
        </div>
        <button class="delete-btn">Hapus</button>
    `;

    list.appendChild(taskItem);
    input.value = "";
    input.focus();
});

list.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.parentElement.remove();
    }
});

list.addEventListener("change", function(e) {
    if (e.target.classList.contains("task-check")) {
        let label = e.target.nextElementSibling;
        label.classList.toggle("done");
    }
});