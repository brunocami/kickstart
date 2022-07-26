import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json'

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x905ba4C08faD1cC729b65dA95eD94fD8172e449a'
);

export default instance;