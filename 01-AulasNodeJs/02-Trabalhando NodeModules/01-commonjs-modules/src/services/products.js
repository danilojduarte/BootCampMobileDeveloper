//Todas funções que lidam com produto;
const produType = {
    version: "digital",
    tax: "1x",
}



async function getFullName(codeId, productName) {
  console.log("product" + codeId + "--" + productName);
}


async function getProductLabel(productName) {
  console.log("Product" + productName);
}

module.exports = {
  getFullName,
  getProductLabel,
};