const titles = require("./list");

const filter = (word) => {
    let result = []
    arrayWord = word.split();
    for (let i=0; i<titles.length; i++){
        if (titles[i].includes(word)){
            result[i] = titles[i];
        }
    }
    return result;
}

module.exports = filter;

//console.log(filter("1"));