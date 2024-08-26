import  conectToDatabase from "./database/data.js"


async function main(){
    await conectToDatabase(
        process.env.USERDATABASE, 
        process.env.PASSWORD
    
    );
   
};

main();
