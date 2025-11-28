let todos = [];

function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const dateInput = document.getElementById("todo-date");

    const text = todoInput.value.trim();
    const date = dateInput.value;

    if (!text || !date) return alert("Isi todo dan tanggal!");

    todos.push({ text, date });

    todoInput.value = "";
    dateInput.value = "";

    renderTodos();
}

function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

function clearTodos() {
    todos = [];
    renderTodos();
}

function filterTodos() {
    renderTodos();
}

function renderTodos() {
    const list = document.getElementById("todo-list");
    const filter = document.getElementById("filter-input").value.toLowerCase();

    list.innerHTML = "";

    const filtered = todos
        .map((t, i) => ({ ...t, originalIndex: i }))
        .filter(t => t.text.toLowerCase().includes(filter));

    if (filtered.length === 0) {
        list.innerHTML = `<li class="text-gray-500">No Todos Available</li>`;
        return;
    }

    filtered.forEach(todo => {
        list.innerHTML += `
        <li class="flex justify-between items-center border-b py-1">
            <span>${todo.text} - 
                <span class="text-sm text-gray-500">${todo.date}</span>
            </span>

            <button onclick="deleteTodo(${todo.originalIndex})"
                class="text-white bg-red-500 px-2 py-1 rounded text-sm">
                Delete
            </button>
        </li>`;
    });
}
