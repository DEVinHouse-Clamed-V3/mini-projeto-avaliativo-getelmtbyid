document.getElementById('Formulario').addEventListener('submit', cadastro_formulario)

function cadastro_formulario(event)
{
    event.preventDefault()
    //pegando variaveis
    const nome = document.getElementById('nome-form').value
    const categoria  = document.getElementById('categoria-form').value
    const fabricante = document.getElementById('fabricante-form').value
    const preco = document.getElementById('preco-form').value
    const quantidade = document.getElementById('estoque-form').value
    const foto = document.getElementById('foto-form').value

    // verificação dos campos, prepare-se para muitas linhas!!
    if(nome === "")
        {
            document.getElementById('nome-form').style.borderColor = 'red'
            alert('o nome nao foi informado')
        }
    else if(nome !== "") 
    {
        document.getElementById('nome-form').style.borderColor = ''
    }


    if(categoria === "")
        {
            document.getElementById('categoria-form').style.borderColor = 'red'
            alert('a categoria nao foi informada')
        }
    else if(categoria !== "") 
    {
        document.getElementById('categoria-form').style.borderColor = ''
    }


    if(fabricante === "")
        {
            document.getElementById('fabricante-form').style.borderColor = 'red'
            alert('o fabricante nao foi informado')
        }
    else if(fabricante !== "") 
    {
        document.getElementById('fabricante-form').style.borderColor = ''
    }


    if(preco === "")
        {
            document.getElementById('preco-form').style.borderColor = 'red'
            alert('o preço nao foi informado')
        }
    else if(preco !== "") 
    {
        document.getElementById('preco-form').style.borderColor = ''
    }


    if(quantidade === "")
        {
            document.getElementById('estoque-form').style.borderColor = 'red'
            alert('a quantidade nao foi informada')
        }
    else if(quantidade !== "") 
    {
        document.getElementById('estoque-form').style.borderColor = ''
    }


    if(foto === "")
        {
            document.getElementById('foto-form').style.borderColor = 'red'
            alert('a foto nao foi informada')
        }
    else if(foto !== "") 
    {
        document.getElementById('foto-form').style.borderColor = ''
    }

    //checagem para vericar se pode as informações sao validas para salvar no local storage

    if(nome && categoria && fabricante && preco && quantidade && foto !== "")
    {
    const produto = 
    {
        id: Date.now(),
        nome: nome,
        categoria: categoria,
        fabricante: fabricante,
        preco: preco,
        quantidade: quantidade,
        foto: foto
    }

    let lista = JSON.parse(localStorage.getItem('produtos'))

    if (lista === null) lista = []

    lista.push(produto)

    localStorage.setItem('produtos', JSON.stringify(lista))
    }
}