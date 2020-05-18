const fs = require('fs');

let url = 'http://myrul.com'


log = (mensaje) => {
    console.log(`${mensaje}`)
}

getAllFiles = (path) => {
    return fs.readdirSync(path)    
}


printAllFiles = (path) => {
    fs.readdir(path, (err, files) => {
        (err) ? console.log(err) : console.log(files)
    })
}

sortAllFiles = (path) => {
    fs.readdir(path, (err, files) => {
        (err) ? console.log(err) : console.log(files.sort().reverse())
    })
}


cantidadFilesLetter = (path, letter) => {
    fs.readdir(path, (err, files) => {
        if(err){
            console.log(err)
        } else {
            aux = files.filter( word => word.charAt(0) == letter)
            console.log(aux.length);
        }

    })
}


module.exports = {
    url,
    log,
    getAllFiles,
    printAllFiles,
    sortAllFiles,
    cantidadFilesLetter
}