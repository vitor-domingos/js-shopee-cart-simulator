
 # **<p style="color:red">Simulador de Carrinho de Compras em JavaScript</p>**

![alt text](https://img.shields.io/badge/Node.js-18.x-339933?style=for-the-badge&logo=node.js)

![alt text](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?style=for-the-badge&logo=javascript)

**Este projeto é uma simulação de back-end para um sistema de carrinho de compras de e-commerce, desenvolvido em JavaScript puro com Node.js. O objetivo é demonstrar e testar a lógica de negócio por trás das operações comuns de um carrinho, como adicionar, remover, atualizar itens e aplicar cupons de desconto.**

> ### **<p style="color:red">Tabela de Conteúdos</p>**

Sobre o Projeto

Funcionalidades

Estrutura de Arquivos

Como Executar

Tecnologias Utilizadas

Lógica do Código


> ### **<p style="color:red">Sobre o Projeto</p>**

**O script principal (index.js) atua como um "cenário de teste", simulando o fluxo de um usuário em um site de compras. Ele cria produtos, os adiciona a um carrinho, manipula suas quantidades, aplica diferentes tipos de cupons e, por fim, limpa o carrinho.**

**Este projeto é um excelente exemplo de como organizar código em módulos, separando as responsabilidades:**

**Criação de Itens**: Um serviço dedicado a criar objetos de produto.

**Gerenciamento do Carrinho**: Um serviço que contém toda a lógica para manipular o carrinho.

**Script de Simulação**: O ponto de entrada que utiliza os serviços para executar um cenário.

 > ### **<p style="color:red">Funcionalidades</p>**

O simulador demonstra as seguintes operações do carrinho:

**Criação de Itens**: Gera produtos com nome, preço, quantidade e categoria.

**Adicionar Item**: Adiciona um item ao carrinho.

**Lidar com Duplicatas**: Se um item já existente é adicionado novamente, sua quantidade é incrementada em vez de criar uma nova entrada.

**Remover Unidade**: Remove uma única unidade de um item específico do carrinho.

**Deletar Item**: Remove um item completamente do carrinho, independentemente da quantidade.

**Atualizar Quantidade**: Altera a quantidade de um item para um valor específico.

**Calcular Total**: Calcula o valor total dos itens no carrinho.

**Aplicar Cupons**: Suporta a aplicação de dois tipos de cupons:

**Percentual** (ex: 10% de desconto).

**Valor Fixo** (ex: R$ 15,00 de desconto).

**Limpar Carrinho**: Esvazia completamente o carrinho.

**Exibir Carrinho**: Mostra o estado atual do carrinho no console após cada operação importante.

 > ### **<p style="color:red">Estrutura de Arquivos</p>**

O projeto está organizado da seguinte forma para garantir a modularidade e a clareza do código:

/
├── services/
│   ├── cart.js      # Contém toda a lógica e funções do carrinho.
│   └── item.js      # Contém a função para criação de objetos de item.
└── index.js         # Script principal que executa a simulação.

 > ### **<p style="color:red">Como Executar</p>**

Para executar este projeto, você precisará ter o Node.js instalado em sua máquina.

 > ### **<p style="color:red">Clone o repositório (ou crie os arquivos conforme a estrutura acima):</p>**

**git clone via HTTPS https://github.com/vitor-domingos/js-shopee-cart-simulator.git**

**git clone via SSH git@github.com:vitor-domingos/js-shopee-cart-simulator.git**

> ### **<p style="color:red">Navegue até a pasta do projeto:</p>**

**cd js-shopee-cart-simulator**

> ### **<p style="color:red">Execute o script de simulação:</p>**

**node src/index.js**

O console exibirá as mensagens de cada passo da simulação, mostrando o estado do carrinho após cada ação.

> ### **<p style="color:red">Tecnologias Utilizadas</p>**

**Node.js**: Ambiente de execução para o JavaScript fora do navegador.

**JavaScript (ES Modules)**: O projeto utiliza a sintaxe moderna de import/export para modularizar o código.

> ### **<p style="color:red">Lógica do Código</p>**

**index.js**: É o orquestrador do cenário. Ele importa os serviços necessários e os chama em uma sequência lógica para simular o comportamento de um usuário. É o ponto de entrada da aplicação.

**services/item.js**: Exporta uma função createItem que funciona como uma "fábrica". Ela padroniza a criação de objetos de produto, garantindo que todos os itens tenham a mesma estrutura (nome, preço, quantidade, etc.).

**services/cart.js**: É o coração do projeto. Este módulo exporta um conjunto de funções assíncronas (async) que manipulam o estado do carrinho. Cada função tem uma responsabilidade única, como addItem, removeItem, calculateTotal, entre outras, tornando o código limpo e fácil de manter.

