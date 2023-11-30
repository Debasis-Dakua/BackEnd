const fs = require('fs')

fs.mkdir("./MyFolder",(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("folder created");
    }
})