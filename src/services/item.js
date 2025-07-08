// services/item.js

// Usaremos um contador simples para gerar um ID único para cada item criado.
// Em um sistema real, isso viria de um banco de dados (ex: auto-incremento).
let lastId = 0;

/**
 * Cria um objeto de item com mais detalhes e validação.
 * @param {string} name - O nome do produto.
 * @param {number} price - O preço unitário do produto.
 * @param {number} quantity - A quantidade inicial do produto.
 * @param {string} category - A categoria do produto.
 * @returns {object|null} O objeto do item ou nulo se os dados forem inválidos.
 */
async function createItem(name, price, quantity, category = "geral") {
  // Validação básica
  if (!name || typeof price !== 'number' || price <= 0 || !Number.isInteger(quantity) || quantity <= 0) {
    console.error("Erro: Dados inválidos para criar o item.", { name, price, quantity });
    return null; // Retorna nulo se os dados de entrada forem ruins
  }

  lastId++; // Incrementa o ID para garantir unicidade

  return {
    id: lastId, // NOVO: ID único para cada produto
    name,
    price,
    quantity,
    category, // NOVO: Categoria do item
    // A função subtotal continua sendo uma ótima ideia!
    subtotal: () => price * quantity,
  };
}

export default createItem;