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
            alert('O nome do produto não foi informado!')
        }
    else 
    {
        document.getElementById('nome-form').style.borderColor = ''
    }


    if(categoria === "")
        {
            document.getElementById('categoria-form').style.borderColor = 'red'
            alert('A categoria do produto não foi informada!')
        }
    else 
    {
        document.getElementById('categoria-form').style.borderColor = ''
    }


    if(fabricante === "")
        {
            document.getElementById('fabricante-form').style.borderColor = 'red'
            alert('O fabricante do produto não foi informado!')
        }
    else 
    {
        document.getElementById('fabricante-form').style.borderColor = ''
    }


    if(preco === "")
        {
            document.getElementById('preco-form').style.borderColor = 'red'
            alert('O preco do produto não foi informado!')
        }
    else  
    {
        document.getElementById('preco-form').style.borderColor = ''
    }


    if(quantidade === "")
        {
            document.getElementById('estoque-form').style.borderColor = 'red'
            alert('A quantidade do produto não foi informada!')
        }
    else 
    {
        document.getElementById('estoque-form').style.borderColor = ''
    }


    if(foto === "")
        {
            document.getElementById('foto-form').style.borderColor = 'red'
            alert('A foto do produto não foi informada!')
        }
    else  
    {
        document.getElementById('foto-form').style.borderColor = ''
    }

    //checagem para vericar se pode as informações sao validas para salvar no local storage

    if(nome && categoria&& fabricante&& preco && quantidade && foto !== "")
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