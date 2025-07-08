import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart = [];
// A lista de desejos continua aqui para futuras implementações!
const myWhishList = [];

// --- Cenário de simulação ---
async function main() { 
// 1. Criando itens com mais detalhes
console.log("Bem-vindo ao seu carrinho da Shopee!");

console.log("\nCriando produtos...");
const hotwheels_ferrari = await createItem("Hotwheels Ferrari", 20.99, 2, "Brinquedos");
const hotwheels_lambo = await createItem("Hotwheels Lamborghini", 39.99, 1, "Brinquedos");
const camisa_nodejs = await createItem("Camisa Node.js", 79.90, 1, "Vestuário");

// Adicionando itens ao carrinho
await cartService.addItem(myCart, hotwheels_ferrari);
await cartService.addItem(myCart, hotwheels_lambo);
await cartService.addItem(myCart, camisa_nodejs);

await cartService.displayCart(myCart);

// 2. Adicionando o MESMO item novamente (deve apenas aumentar a quantidade)
console.log("\nAdicionando uma Ferrari a mais...");
const mais_uma_ferrari = await createItem("Hotwheels Ferrari", 20.99, 1, "Brinquedos");
// Nota: Para simular o mesmo produto, vamos usar o ID do original
mais_uma_ferrari.id = hotwheels_ferrari.id; 
await cartService.addItem(myCart, mais_uma_ferrari);

await cartService.displayCart(myCart);

// 3. Removendo uma unidade de um item
await cartService.removeItem(myCart, hotwheels_ferrari.id);
await cartService.displayCart(myCart);

// 4. Deletando um item completamente
await cartService.deleteItem(myCart, hotwheels_lambo.id);
await cartService.displayCart(myCart);

// 5. Atualizando a quantidade de um item diretamente
await cartService.updateItemQuantity(myCart, camisa_nodejs.id, 5);
await cartService.displayCart(myCart);

// 6. Calculando o total com um cupom de desconto de 10%
const cupomDezPorcento = { type: 'percent', value: 10 };
await cartService.calculateTotal(myCart, cupomDezPorcento);

// 7. Calculando o total com um cupom de desconto de valor fixo
const cupomFixo = { type: 'fixed', value: 15.00 };
await cartService.calculateTotal(myCart, cupomFixo);

// 8. Limpando o carrinho
await cartService.clearCart(myCart);
await cartService.displayCart(myCart);
}

main()