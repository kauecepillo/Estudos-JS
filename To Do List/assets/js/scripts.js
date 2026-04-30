const input = document.getElementById("task-input");
const button = document.getElementById("button");
const lista = document.getElementById("tasks");

button.addEventListener("click", adicionarTarefa);

function adicionarTarefa () {
    const texto = input.value;

    if(texto.trim() === "") return;

    const li = document.createElement("p");

    //Criar checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    //Criar texto
    const span = document.createElement("span");
    span.textContent = texto;

    //Evento do checkbox
    checkbox.addEventListener("change", function(){
        span.classList.toggle("concluida");
    });

    li.appendChild(checkbox);
    li.appendChild(span);

    lista.appendChild(li);

    input.value = "";

};