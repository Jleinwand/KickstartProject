import Web3 from 'web3';

let web3;

if(typeof window !=="undefined" && typeof window.web3 !== "undefined") {
    window.ethereum.request({ method: "eth_requestAccounts" });
    web3 = new Web3(window.web3.currentProvider);
} else {
    //on server or Metamask is not being run
    const provider = new Web3.providers.HttpProvider(
        "https://rinkeby.infura.io/v3/4ef5b25183b2422daaa82b7ca7405fcf"
    );
    web3 = new Web3(provider);
}

export default web3;

