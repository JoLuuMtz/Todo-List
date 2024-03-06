import '/style.css'
import {ToDo} from './src/js/todo.class.js'
import './src/img/icon.png'
import {TodoList} from './src/js/todo-list.class.js'
import { crearTodoHtml } from './src/js/componentes.js';

//const task = new ToDo(task); 
export const todoList = new TodoList();
todoList.todos.forEach(todo => crearTodoHtml(todo));





    

