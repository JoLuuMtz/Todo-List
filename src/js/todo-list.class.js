export class TodoList {

    constructor() {
        // this.todos = [];
        this.ObtenerLocalStorage();
    }
    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();//guardar en local storage
    }
    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage() //guardar en local storage
    }
    marcarCompletado(id) {
        for (const todo of this.todos) {
            if (todo.id == id) {
                todo.completado = !todo.completado;
                break
            }
        }
    }
    eliminarCompletado() {
        this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
   
    }
    guardarLocalStorage() { //guardar en local storage los todo como un json "perfecto"
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }
    ObtenerLocalStorage() {
        this.todos = (localStorage.getItem('todo')) 
        ? JSON.parse(localStorage.getItem('todo')) 
        : [];
       // console.log(this.todos);
    }
    actualizarContadorPendientes(numerosPendientes) {
        numerosPendientes = this.todos.filter(todo => !todo.completado).length;
        contador.innerText = numerosPendientes;
    }
}   

