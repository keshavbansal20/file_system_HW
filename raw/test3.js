let fs = require("fs");
const readline = require('readline');
let path   = require("path");
let input = process.argv.slice(2);
src  = input[0];
for(let i = 0 ; i < input.length ; i++){
  src = input[i];
  display(path.join(src));
}

function display(file){
      const readInterface = readline.createInterface({
        input: fs.createReadStream(file),
        
    });
    let i = 1;
    readInterface.on('line', function(line) {
        console.log(i +".",line);
        i++;
  });

 
}



