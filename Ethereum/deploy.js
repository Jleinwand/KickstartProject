const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new HDWalletProvider(
'tooth rescue frown bicycle road during cup story spoil engage obey area',    
'https://rinkeby.infura.io/v3/4ef5b25183b2422daaa82b7ca7405fcf'

);
const web3 = new Web3(provider);

//writing a function to use the async await syntax
const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from', accounts[0]);
    const result = await new web3.eth.Contract(
        compiledFactory.abi)
        .deploy({ data: compiledFactory.evem.bytecode.object})
        .send({ gas: '1400000', from: accounts[0]});

    console.log('Contract deployed to ', result.options.address);
    provider.engine.stop();
};
deploy();