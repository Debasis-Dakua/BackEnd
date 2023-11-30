const fs = require('fs')

fs.rmdir("./MyFolder",(err)=>{
    if(err){
        console.log("error");
    }
    else{
        console.log("folder deleted");
    }
})