import { ToDo } from './todo.class.js';
import { TodoList } from './todo-list.class.js';

//referencias del documento HTML
const divTodoList = document.querySelector('.todo-list'),
    txtInput = document.querySelector('.new-todo'),
    btnBorrar = document.querySelector('.clear-completed'),
    ulFiltros = document.querySelector('.filters'),
    ancorFiltros = document.querySelectorAll('.filtro'),

    contador = document.querySelector('.contador');
let numerosPendientes = 0;


export const crearTodoHtml = (todo) => {
    const htmlTodo = `<li class= ${(todo.completado == true) ? 'completed' : ''} data-id=${todo.id}>
    <div class="view">
        <input class="toggle" type="checkbox" ${(todo.completado) == true ? 'checked' : ''}>
        <label>${todo.task}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li>`;
    const div = document.createElement('div');
    div.innerHTML = htmlTodo;
    divTodoList.append(div.firstElementChild);
    return div;
}
const todoList = new TodoList()
//Eventos
txtInput.addEventListener('keyup', (event) => {

    if (event.keyCode === 13 && txtInput.value.length > 0) {
        const newTodo = new ToDo(txtInput.value);
        todoList.nuevoTodo(newTodo);
        crearTodoHtml(newTodo);
        txtInput.value = '';
        // todoList.actualizarContadorPendientes(numerosPendientes);

    }
});
divTodoList.addEventListener('click', (event) => {
    const nuevoElemento = event.target.localName //input, label, button
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');//obtiene el id del todo
    console.log(nuevoElemento)
    console.log(todoElemento);
    console.log(todoId)

    if (nuevoElemento.includes('input')) {//marca como completado el todo
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');
    } else if (nuevoElemento.includes('button')) {// borra el todo con el boton 
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }
});
btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletado();
    for (let i = divTodoList.children.length - 1; i >= 0; i--) {
        const elemento = divTodoList.children[i];
        if (elemento.classList.contains('completed')) {
            divTodoList.removeChild(divTodoList.children[i]);
        }
        console.log(elemento);
    }
});
ulFiltros.addEventListener('click', (event) => {
    const filtro = event.target.text;
    console.log(filtro);
    if (!filtro) { return; }
    ancorFiltros.forEach(elem => elem.classList.remove('selected'));
    for (const elemento of divTodoList.children) {
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');
        switch (filtro) {
            case 'Due':
                if (completado) {
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completed':
                if (!completado) {
                    elemento.classList.add('hidden');
                }
                break;
        }
    }
});








