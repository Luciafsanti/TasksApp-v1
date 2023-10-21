const tasks = require("../taskData");

const list = () => {
    let titles = [];
    for (let i = 0; i<tasks.length ; i++){
        titles[i] = tasks[i].title
    }
    return titles;
}
const titles = list();

module.exports = titles;

