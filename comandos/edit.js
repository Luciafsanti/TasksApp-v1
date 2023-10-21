const tasks = require("../taskData")
const titles = require("./list");
const find = require("./find");


const edit = () =>{
    const task = process.argv[2];
    const newDesc = process.argv[3];
    const exists = find(task);
    if(exists){
        let position = titles.indexOf(task);
        console.log("La descripcion de "+ tasks[position].title + " es: "+ tasks[position].desc);
        console.log("Será reemplazada por: "+ newDesc);
        tasks[position].desc = newDesc;
        return tasks[position];
    }
    else{
        return "No existe la tarea buscada"
    }

}

console.log(edit());

