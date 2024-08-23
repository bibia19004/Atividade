let produtos = [];

function adicionarProduto(nome, preco, quantidade) {
    if (!nome || preco <= 0 || quantidade <= 0) {
        console.log("Erro: Todos os campos devem estar preenchidos e o preço e a quantidade devem ser maiores que 0.");
        return;
    }

    produtos.push({
        nome: nome,
        preco: preco,
        quantidade: quantidade
    });

    console.log("Produto adicionado com sucesso!");
}

function listarProdutos() {
    if (produtos.length === 0) {
        console.log("Nenhum produto cadastrado.");
        return;
    }

    console.log("Produtos cadastrados:");
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. Nome: ${produto.nome}, Preço: R$${produto.preco.toFixed(2)}, Quantidade: ${produto.quantidade}`);
    });
}


function calcularValorEstoque() {
    let valorTotal = produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    console.log(`Valor total dos produtos em estoque: R$${valorTotal.toFixed(2)}`);
}

adicionarProduto("Produto A", 25.50, 10);
adicionarProduto("Produto B", 30.00, 5);
listarProdutos();
calcularValorEstoque();