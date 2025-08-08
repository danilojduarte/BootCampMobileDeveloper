//quais ações meu carrinho pode fazer.
//Add itens
async function addItem(userCart, item) {
  userCart.push(item);
}

//Calcular o total
async function calculateTotal(userCart) {
  console.log("\nShopee Cart Total Is:");

  const result = userCart.reduce((total, item) => total  + item.subtotal(), 0);

  console.log(`\🤑 Total: ${result}`);
}

//Delete itens
async function deleteItem(userCart, name) {
  const index = userCart.findIndex(item => item.name === name);
  if (index !== -1) {
    userCart.splice(index, 1);
  } else {
    console.log(`Item ${name} not found in the cart.`);
  }
}

//Remover um item
async function removeItem(userCart, index){
  if (index >= 0 && index < userCart.length) {
    userCart.splice(index, 1);
  } else {
    console.log(`Item at index ${index} not found in the cart.`);
  }
}

async function displaycart(userCart){
  console.log("Shopee cart list:");
  userCart.forEach((item, index) => {
    console.log(`${index + 1}. ${item.name} - R$ ${item.price} | 
      ${item.quantity} x | Subtotal = ${item.subtotal()}`);
  })
}


export {
  addItem, calculateTotal, deleteItem, removeItem, displaycart};