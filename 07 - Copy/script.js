// 1. Tangkap elemen yang dibutuhkan dari DOM
const form = document.getElementById('todoForm');
const submitBtn = document.getElementById('submitBtn');
const checkbox = document.getElementById('checkbox');
const todoInput = document.getElementById('todoInput');

// 2. Event Click pada Button Submit
submitBtn.addEventListener("click", function() {
    // Tetap mencatat log ke console tanpa merusak fungsi submit
    console.log("Tombol submit diklik");
});

// 3. Event Click pada Checkbox
checkbox.addEventListener("click", function() {
    if (this.checked) {
        console.log("Status: Checkbox aktif");
    } else {
        console.log("Status: Checkbox non-aktif");
    }
});

// 4. Event Submit pada Form
form.addEventListener("submit", function(event) {
    // Mencegah halaman reload otomatis
    event.preventDefault(); 
    
    console.log("Form berhasil diproses");
    
    // Logika mengambil isi input
    const task = todoInput.value;
    if(task) {
        console.log("Tugas yang diinput:", task);
        
        // Opsional: Reset input setelah submit agar bersih
        todoInput.value = "";
        todoInput.focus();
    } else {
        alert("Silakan isi tugas terlebih dahulu.");
    }
});