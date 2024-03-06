export class ToDo{
    constructor(task){
        this.task = task;
        this.id= new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

   




}