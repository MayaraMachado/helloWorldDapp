
//https://github.com/mneedham/ethereum-nursery/blob/master/eth_solc.js
const fs = require("fs"),
      abiDecoder = require('abi-decoder'),
      Web3 = require('web3'),
	  solc = require('solc');

const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545");
const code = fs.readFileSync('hello.sol').toString();
const compiledCode = solc.compile(code);

const abi = JSON.parse(compiledCode.contracts[':Hello'].interface);
const abiInterface = compiledCode.contracts[':Hello'].interface;

//const HelloContract = web3.eth.contract(abiInterface);
const HelloContract = web3.eth.contract(abi)
const bytecode = compiledCode.contracts[':Hello'].bytecode;


const deployedContract = HelloContract.new('World',{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
const address = deployedContract.address
const contractInstance = HelloContract.at(deployedContract.address)

console.log(contractInstance);

/*
function setValue(){
        var valor = document.getElementById('bbb').value;
        document.getElementById('nome').innerHTML = valor;
}*/

function setValue(){
	var nome = document.getElementById('nomeInput').value;
	contractInstance.setNome(nome);
	location.reload()
}

contractInstance.getNome(function(err, result){
            if(!err)
                {
                    $("#nome").html(result);
                    console.log(result);
                }
            else
                console.error(err);
        });