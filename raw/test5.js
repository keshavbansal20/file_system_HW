const fs = require("fs")
const path = require("path");
let input = process.argv.slice(2);
let fileToCopy = input[0];
let fileToOverride = input[1];
function override(fileToCopy , fileToOverride){
    let pathToFile = path.join(fileToCopy)
    let pathToNewDestination = path.join(fileToOverride);
    let exit = fs.existsSync(pathToNewDestination);
    if(exit == true){
        fs.writeFileSync(pathToNewDestination , pathToFile ,{encoding:'utf8',flag:'w'});
    }else{

    }
}


try {
  fs.copyFileSync(pathToFile, pathToNewDestination)
  console.log("Successfully copied and moved the file!")
} catch(err) {
  throw err
}