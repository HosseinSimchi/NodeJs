const fs = require('fs');



class saveData {
    constructor(path, data){
        this.path = path;
        this.data = data;
    }

    saveToJsonFile(){
        fs.writeFile(this.path, this.data, (err) => {console.log(err)});
    }
}

module.exports = {saveData};