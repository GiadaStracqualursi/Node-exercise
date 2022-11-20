import * as fs from "node:fs";

const data= "Content of file.txt";


fs.writeFile("file.txt", data, "utf-8", function(error){
    if(error){
        console.log(error);
        return;
    }
    console.log('The file has been saved!');
    console.log(data);
    
});