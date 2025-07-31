

const p = require("./services/products");


async function main() {
  console.log("Carrinho Compras");

  p.getFullName("408", "mousePad");
  p.getProductLabel("mousepad");
}

main();
