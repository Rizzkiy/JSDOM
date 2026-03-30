const sectionJudul = document.getElementById('judul');
sectionJudul.style.backgroundColor = '#f4f4f4';
sectionJudul.style.padding = '15px';
sectionJudul.style.borderRadius = '0px';

const pJudul = document.getElementsByClassName('judul');
pJudul[0].innerHTML = "Todo List";

const semuaParagraf = document.getElementsByTagName('p');
for (let i = 0; i < semuaParagraf.length; i++) {
    semuaParagraf[i].style.color = '#000000';
}

const inputField = document.querySelector('#input input');
inputField.placeholder = "Masukkan list...";
inputField.style.border = "1px solid #000";

const allDivsInInput = document.querySelectorAll('#input div');
console.log("Elemen div di dalam #input:", allDivsInInput);

const tombol = document.getElementById('btn-submit');
const todoContainer = document.querySelector('#todoListContainer');

function addTodoItem(todoText) {
    if (todoText.trim() === "") return;

    const todoDiv = document.createElement('div');
    todoDiv.className = 'todo-item';

    const todoSpan = document.createElement('span');
    todoSpan.className = 'todo-text';
    todoSpan.innerText = todoText;

    const doneBtn = document.createElement('button');
    doneBtn.innerText = 'Selesai';
    doneBtn.className = 'done-btn-style';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Hapus';
    deleteBtn.className = 'delete-btn';

    doneBtn.onclick = function() {
        todoSpan.classList.toggle('todo-done');
    };

    deleteBtn.onclick = function() {
        todoDiv.remove();
    };

    todoDiv.appendChild(todoSpan);
    todoDiv.appendChild(doneBtn);
    todoDiv.appendChild(deleteBtn);

    todoContainer.appendChild(todoDiv);
}

tombol.onclick = function() {
    const todoValue = inputField.value;
    addTodoItem(todoValue);
    inputField.value = "";
    inputField.focus();
};

inputField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        tombol.click();
    }
});

setTimeout(() => {
    const semuaDeleteBtn = document.querySelectorAll('.delete-btn');
    console.log(`Jumlah tombol hapus saat ini: ${semuaDeleteBtn.length}`);
}, 100);