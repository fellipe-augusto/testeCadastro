//document.getElementById('formulario').addEventListener('submit', cadastrarCliente);

function cadastrarCliente(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cep = document.getElementById('cep').value;
    let logradouro = document.getElementById('logradouro').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

    cliente = {
        nomeCliente: nome,
        emailCliente: email,
        telefoneCliente: telefone,
        cepCliente: cep,
        logradouroCliente: logradouro,
        numeroCliente: numero,
        bairroCliente: bairro,
        cidadeCliente: cidade,
        estadoCliente: estado
    }

    if(localStorage.getItem('cadastrosCliente') === null){
        let cadastros = [];
        cadastros.push(cliente);
        localStorage.setItem('cadastrosCliente', JSON.stringify(cadastros));
    } else {
        let cadastros = JSON.parse(localStorage.getItem('cadastrosCliente'));
        cadastros.push(cliente);
        localStorage.setItem('cadastrosCliente', JSON.stringify(cadastros));
    }

    //exibirClientes();
}



function exibirClientes (){
    let clientes = JSON.parse(localStorage.getItem('cadastrosCliente'));
    let clientesLista = document.getElementById('listaClientes');

    clientesLista.innerHTML = '';

    for(let i = 0; i < clientes.length; i++){
        let nomeCliente = clientes[i].nomeCliente;
        let emailCliente = clientes[i].emailCliente;
        let telefoneCliente = clientes[i].telefoneCliente;
        let cepCliente = clientes[i].cepCliente;
        let logradouroCliente = clientes[i].logradouroCliente;
        let numeroCliente = clientes[i].numeroCliente;
        let bairroCliente = clientes[i].bairroCliente;
        let cidadeCliente = clientes[i].cidadeCliente;
        let estadoCliente = clientes[i].estadoCliente;
        
        clientesLista.innerHTML += '<tr><td>' + nomeCliente +
                                '</td><td>' + emailCliente +
                                '</td><td>' + telefoneCliente +
                                '</td><td>' + cepCliente +
                                '</td><td>' + logradouroCliente +
                                '</td><td>' + numeroCliente +
                                '</td><td>' + bairroCliente +
                                '</td><td>' + cidadeCliente +
                                '</td><td>' + estadoCliente +
                                '</td><td><button class="btn btn-danger" onclick="deletarCliente(\'' + nomeCliente + '\')">Excluir</button></td>' +
                                '</tr>';
    }
}

function deletarCliente(nomeCliente){
    let clientes = JSON.parse(localStorage.getItem('cadastrosCliente'));

    for (let i = 0; i < clientes.length; i++){
        if(clientes[i].nomeCliente === nomeCliente){
            clientes.splice(i, 1);
        }

        localStorage.setItem('cadastrosCliente', JSON.stringify(clientes));
    }

    exibirClientes();
}

function validarDados(){
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let telefone = document.getElementById('telefone').value;
    let cep = document.getElementById('cep').value;
    let logradouro = document.getElementById('logradouro').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;

    if(nome == ""){
        alert("Nome não informado.");
        nome.focus();
        return;
    } else if(email == ""){
        alert("E-mail não informado.");
        email.focus();
        return;
    } else if(telefone == ""){
        alert("Telefone não informado.");
        telefone.focus();
        return;
    } else if(cep == ""){
        alert("CEP não informado.");
        cep.focus();
        return;
    } else if(logradouro == ""){
        alert("Logradouro não informado.");
        logradouro.focus();
        return;
    } else if(numero == ""){
        alert("Número não informado.");
        numero.focus();
        return;
    } else if(bairro == ""){
        alert("Bairro não informado.");
        bairro.focus();
        return;
    } else if(cidade == ""){
        alert("Cidade não informada.");
        cidade.focus();
        return;
    } else if(estado == ""){
        alert("Estado não informada.");
        estado.focus();
        return;
    } else {
        alert("Cadastro realizado!");
        return;
    }
}