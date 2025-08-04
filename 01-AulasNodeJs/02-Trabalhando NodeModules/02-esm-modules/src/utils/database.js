async function connectToDatabase(dataName) {

  console.log(`conectado ao banco ${dataName}`);
};

async function disconectDatabase() {
  console.log("Desconetando do banco de dados")
}


export {connectToDatabase, disconectDatabase};