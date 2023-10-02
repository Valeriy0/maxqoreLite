import {matrixMaxqoreAbi} from '../helpers/contractsAbi/maxqore';
import {matrixTokenAbi} from '../helpers/contractsAbi/token';
import {matrixXBaseAbi} from '../helpers/contractsAbi/xbase';

export default {
  allowedChainId: 97,
  stand: 'prod',

  matrixMaxqore: '0xaD856E039E8b4F541faf793e7E38cDA3317a8391',
  matrixMaxqoreAbi: matrixMaxqoreAbi,

  BUSDContract: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
  BUSDContractAbi: matrixTokenAbi,

  XBASEContract: '0xed24fc36d5ee211ea25a80239fb8c4cfd80f12ee',
  XBASEContractAbi: matrixXBaseAbi,
};
