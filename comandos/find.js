
const titles = require("./list")

function find (task){
    let exists = titles.includes(task);
    return exists
}

module.exports = find;

