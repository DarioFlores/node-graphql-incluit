const logger = require('./logger')
const path = require('path');
const os = require('os');
const fs = require('fs');
// console.log(logger);

// let pathO = path.parse(__dirname + '/log')

// console.log(pathO)
// logger.log(`freemen: ${os.freemem()}`)
// logger.log(`totalmen: ${os.totalmem()}`)
// logger.log(`fs: ${fs.readdirSync('./')}`)


// fs.readdir('./', (err, files) => {
    
    //     (err) ? console.log(err) : console.log(files)
    // })

console.log(logger.getAllFiles('./'))
logger.printAllFiles('./')
logger.sortAllFiles('./')
logger.cantidadFilesLetter('./', 'a')
