const tasks = require("../taskData");
const titles = require("./list");
const exists = require("./find");

const returnDesc = () => {
    let title = process.argv[2];
    if (exists(title)){
        return tasks[titles.indexOf(title)].desc;
    }
    else{
        return "No existe la tarea buscada";
    }
}

//console.log(returnDesc());