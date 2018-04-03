web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi= JSON.parse('[{"constant":true,"inputs":[],"name":"getNome","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_novoNome","type":"string"}],"name":"setNome","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_start","type":"string"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}]');
HelloContract = web3.eth.contract(abi);
web3.eth.defaultAccount = web3.eth.accounts[0] 
contractInstance = HelloContract.at('0x9b51edd5b5ed1af5826e4b0fdcde091a30c12fe8');
console.log(contractInstance);

/*
function setValue(){
        var valor = document.getElementById('bbb').value;
        document.getElementById('nome').innerHTML = valor;
}*/

function setValue(){
	var nome = document.getElementById('nomeInput').value;
	contractInstance.setNome(nome);
	location.reload();
}

contractInstance.getNome(function(err, result){
            if(!err)
                {
                    $("#nome").html(result);
                }
            else
                console.error(err);
        });
