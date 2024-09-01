import produtosIniciais from "./produtos.json" with {type: "json"}


function cadastro_formulario(event) {
    event.preventDefault()
    //pegando variaveis
    const nome = document.getElementById('nome-form').value
    const categoria  = document.getElementById('categoria-form').value
    const fabricante = document.getElementById('fabricante-form').value
    const preco = document.getElementById('preco-form').value
    const quantidade = document.getElementById('estoque-form').value
    const foto = document.getElementById('foto-form').value
    const id = document.getElementById('id-form').value

    // verificação dos campos, prepare-se para muitas linhas!!
    if (nome === "") {
        document.getElementById('nome-form').style.borderColor = 'red'
        alert('O nome do produto não foi informado!')
    } else {
        document.getElementById('nome-form').style.borderColor = ''
    }

    if (categoria === "") {
        document.getElementById('categoria-form').style.borderColor = 'red'
        alert('A categoria do produto não foi informada!')
    } else {
        document.getElementById('categoria-form').style.borderColor = ''
    }

    if (fabricante === "") {
        document.getElementById('fabricante-form').style.borderColor = 'red'
        alert('O fabricante do produto não foi informado!')
    } else {
        document.getElementById('fabricante-form').style.borderColor = ''
    }

    if (preco === "") {
        document.getElementById('preco-form').style.borderColor = 'red'
        alert('O preco do produto não foi informado!')
    } else {
        document.getElementById('preco-form').style.borderColor = ''
    }

    if (quantidade === "") {
        document.getElementById('estoque-form').style.borderColor = 'red'
        alert('A quantidade do produto não foi informada!')
    } else {
        document.getElementById('estoque-form').style.borderColor = ''
    }

    if (foto === "") {
        document.getElementById('foto-form').style.borderColor = 'red'
        alert('A foto do produto não foi informada!')
    } else {
        document.getElementById('foto-form').style.borderColor = ''
    }

    //checagem para vericar se pode as informações sao validas para salvar no local storage

    if (nome !== "" && categoria !== "" && fabricante !== "" && preco !== "" && quantidade !== "" && foto !== "") {

        const produto = {
            id: Date.now(),
            nome: nome,
            categoria: categoria,
            fabricante: fabricante,
            preco: preco,
            quantidade: quantidade,
            foto: foto
        }

        let lista = JSON.parse(localStorage.getItem('produtos')) || []

        //se tem o id, edita o produto. se nao, cadastra um novo.
        if (id !== "") {
            const posicaoProdutoNoArray = lista.findIndex(produto => produto.id === parseInt(id))
            lista[posicaoProdutoNoArray] = produto
            document.getElementById('id-form').value = ""   
        } else {
            lista.push(produto)
        }

        document.getElementById('img-form').setAttribute('src', '/image/img-med-generico.png')

        localStorage.setItem('produtos', JSON.stringify(lista))
    }

    document.getElementById('Formulario').reset();

    mostrarProdutos();
}


document.getElementById('Formulario').addEventListener('submit', cadastro_formulario)



//Essa função vai exibir os produtos na tela, que foi pego no localstorage acima
function mostrarProdutos() {

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

   //Foi criado no html a Div lista-produtos que vai listar os produtos
    const areaProdutos = document.getElementById('lista-produtos');


    areaProdutos.innerHTML = '';


    if (produtos.length === 0) {
        areaProdutos.innerHTML = '<p>Nenhum produto cadastrado.</p>';
    } else {

        // esse forEach irá criar para cada produto um cartão 
        produtos.forEach(function(produto) {

            let cartaoProduto = `
                <div class="produto-card">
                    <img src="${produto.foto}" alt="${produto.nome}" width="100px" height="100px">
                    <h3>${produto.nome}</h3>
                    <p><span class="label">Categoria:</span> ${produto.categoria}</p>
                    <p><span class="label"> Fabricante:</span> ${produto.fabricante}</p>
                    <p><span class="label">Preço:</span> R$ ${produto.preco}</p>
                    <p><span class="label">Quantidade:</span> ${produto.quantidade}</p>
                    <div class="btn-container">
                        <button onclick="editarProduto(${produto.id})" class="btn">Editar</button>
                        <button onclick="excluirProduto(${produto.id})" class="btn-danger">Deletar</button>
                    </div>
                </div>
            `;


            areaProdutos.innerHTML += cartaoProduto;
        });
    }
}

document.addEventListener('DOMContentLoaded', mostrarProdutos);


// carregando produdosIniciais vindos do json

function carregarProdutosIniciais () {

    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];

    // verifica se a lista está vazia para preencher os produtos iniciais no localStorage
    if (produtos.length === 0) {
        localStorage.setItem('produtos', JSON.stringify(produtosIniciais))
    } 
    
}

carregarProdutosIniciais()

document.getElementById("foto-form").addEventListener("input", function (event) {
    document.getElementById('img-form').setAttribute('src', this.value)
})


function editarProduto(id) {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || []
    const produtoEditar = produtos.find(produto => produto.id === id)
    
    document.getElementById('nome-form').value = produtoEditar.nome
    document.getElementById('categoria-form').value = produtoEditar.categoria
    document.getElementById('fabricante-form').value = produtoEditar.fabricante
    document.getElementById('preco-form').value = produtoEditar.preco
    document.getElementById('estoque-form').value = produtoEditar.quantidade
    document.getElementById('foto-form').value = produtoEditar.foto

    document.getElementById('img-form').setAttribute('src', produtoEditar.foto)

    document.getElementById('id-form').value = produtoEditar.id

}

window.editarProduto = editarProduto

// função para excluir um produto do LocalStorage

function excluirProduto(id) {

    let produtos = JSON.parse(localStorage.getItem('produtos')) || []

    produtos = produtos.filter(produto => produto.id !== id)

    localStorage.setItem('produtos', JSON.stringify(produtos))

    mostrarProdutos()

}

window.excluirProduto = excluirProduto;