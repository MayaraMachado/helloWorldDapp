pragma solidity ^0.4.11;

contract Hello{
	
	string nome;

	function Hello(string _start) public{
		nome = _start;
	}

	function setNome(string _novoNome) public{
		nome = _novoNome;
	}

	function getNome() public constant returns (string){
		return nome;
	}
}
