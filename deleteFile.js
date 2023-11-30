const fs = require('fs')

fs.unlink("./demo.txt",(err)=>{
    
    if(err){
        console.log("error");
    }
    else{
        console.log("file deleted");
    }

})