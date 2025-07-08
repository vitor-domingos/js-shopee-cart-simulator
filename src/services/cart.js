// services/cart.js

/**
 * MELHORIA: Adiciona um item ao carrinho.
 * Se o item já existir (verificado pelo ID), apenas incrementa a quantidade.
 * Se não, adiciona o novo item ao carrinho.
 */
 async function addItem(userCart, itemToAdd) {
  const existingItemIndex = userCart.findIndex((item) => item.id === itemToAdd.id);

  if (existingItemIndex !== -1) {
    // Item já existe, apenas incrementa a quantidade
    userCart[existingItemIndex].quantity += itemToAdd.quantity;
  } else {
    // Item não existe, adiciona ao carrinho
    console.log(`\n🛒 Item "${itemToAdd.name}" adicionado ao carrinho!`);
    userCart.push(itemToAdd);
  }
}

/**
 * MELHORIA: Calcula o total do carrinho, com opção de aplicar um desconto.
 * @param {Array} userCart - O array do carrinho.
 * @param {object} discount - Opcional. Objeto de desconto. Ex: { type: 'percent', value: 10 } ou { type: 'fixed', value: 5.50 }
 */
async function calculateTotal(userCart, discount = null) {
  console.log("\n🧾 Resumo do Pedido Shopee:");

  const subtotal = userCart.reduce((total, item) => total + item.subtotal(), 0);
  console.log(`Subtotal: R$ ${subtotal.toFixed(2)}`);

  let total = subtotal;
  if (discount) {
    if (discount.type === 'percent' && discount.value > 0) {
      const discountAmount = (subtotal * discount.value) / 100;
      total -= discountAmount;
      console.log(`Desconto (${discount.value}%): - R$ ${discountAmount.toFixed(2)}`);
    } else if (discount.type === 'fixed' && discount.value > 0) {
      total -= discount.value;
      console.log(`Desconto (fixo): - R$ ${discount.value.toFixed(2)}`);
    }
  }
  
  // Garante que o total não seja negativo
  if (total < 0) {
    total = 0;
  }

  console.log(`\n🎁 TOTAL DO PEDIDO: R$ ${total.toFixed(2)}`);
  return total;
}

/**
 * Remove um item completamente do carrinho, independentemente da quantidade.
 * Usa o ID do item para a busca.
 */
async function deleteItem(userCart, itemId) {
  const index = userCart.findIndex((item) => item.id === itemId);

  if (index !== -1) {
    console.log(`\n❌ Item "${userCart[index].name}" deletado do carrinho.`);
    userCart.splice(index, 1);
  } else {
    console.log(`\n Item com ID ${itemId} não encontrado para deleção.`);
  }
}

/**
 * Diminui a quantidade de um item em 1. Se a quantidade chegar a 0, o item é removido.
 * Usa o ID do item para a busca.
 */
async function removeItem(userCart, itemId) {
  const indexFound = userCart.findIndex((p) => p.id === itemId);

  if (indexFound === -1) {
    console.log(`\n Item com ID ${itemId} não encontrado para remover.`);
    return;
  }

  if (userCart[indexFound].quantity > 1) {
    userCart[indexFound].quantity--;
    console.log(`\n Uma unidade do item "${userCart[indexFound].name}" foi removida.`);
  } else {
    // Se a quantidade é 1, deleta o item do carrinho
    deleteItem(userCart, itemId);
  }
}

/**
 * NOVO: Atualiza a quantidade de um item para um valor específico.
 * Se a quantidade for 0, o item é removido. Se for negativa, a ação é ignorada.
 */
async function updateItemQuantity(userCart, itemId, newQuantity) {
  if (newQuantity < 0) {
    console.log("\n Quantidade inválida. Deve ser um número não negativo.");
    return;
  }
  
  if (newQuantity === 0) {
    await removeItem(userCart, itemId);
    return;
  }
  
  const indexFound = userCart.findIndex((p) => p.id === itemId);
  if (indexFound !== -1) {
    userCart[indexFound].quantity = newQuantity;
    console.log(`\n🔄 Quantidade do item "${userCart[indexFound].name}" atualizada para ${newQuantity}.`);
  } else {
    console.log(`\n Item com ID ${itemId} não encontrado para atualizar.`);
  }
}

/**
 * NOVO: Limpa todos os itens do carrinho.
 */
async function clearCart(userCart) {
  console.log("\n Carrinho esvaziado com sucesso!");
  userCart.length = 0; // Maneira eficiente de limpar um array
}

/**
 * Exibe todos os itens do carrinho de forma legível.
 */
async function displayCart(userCart) {
  console.log("\n------- 🛒 SEU CARRINHO DE COMPRAS -------");
  if (userCart.length === 0) {
    console.log("Seu carrinho está vazio.");
  } else {
    userCart.forEach((item) => {
      console.log(
        `➡️  ${item.name} (ID: ${item.id}) - R$ ${item.price.toFixed(2)} | Qtd: ${item.quantity} | Subtotal: R$ ${item.subtotal().toFixed(2)}`
      );
    });
  }
  console.log("-------------------------------------------");
}

export {
  addItem,
  calculateTotal,
  deleteItem,
  removeItem,
  displayCart,
  updateItemQuantity, // Exportando a nova função
  clearCart,          // Exportando a nova função
};