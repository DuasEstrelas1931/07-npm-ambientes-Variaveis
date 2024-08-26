async function conectToDatabase(user,password) {
    if (user === process.env.USERDATABASE && 
        password === process.env.PASSWORD){
        console.log("Conexão com o banco de dados estabelecida.");
    }else{
        console.log("Conexão com o banco de dados não foi estabelecida.");
    }
        
};

export default conectToDatabase;