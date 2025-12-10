const fs=require("fs")
/*fs.writeFile("index.txt","I created a new file using fs module..",(err)=>{
    console.log(err);
    console.log("file created");
});
fs.appendFile("sample.txt","appended data",(err)=>{
    console.log(err);
});*/
fs.unlink("index.txt",(err)=>{
    if(err) {
        console.log(err);
    }
    else{
        console.log("File deleted successfully");
    }
});

