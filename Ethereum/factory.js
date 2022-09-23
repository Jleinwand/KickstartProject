import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
CampaignFactory.abi,
'0xF2f913E9117dfFaEAeaB4b55Ab549aB32C39087c'
);

export default instance;
