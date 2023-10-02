export const contractRouterAbi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'referrerAddress',
        type: 'address',
      },
    ],
    name: 'forsageAndXGoldRegistration',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'referrerAddress',
        type: 'address',
      },
    ],
    name: 'forsageAndXQoreRegistration',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'referrerAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'busdRequest',
        type: 'uint256',
      },
    ],
    name: 'forsageAndXQoreRegistrationBusd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'referrerAddress',
        type: 'address',
      },
    ],
    name: 'forsageAndXxxRegistration',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'referrerAddress',
        type: 'address',
      },
    ],
    name: 'forsageRegistration',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'referrerAddress',
        type: 'address',
      },
    ],
    name: 'forsageRegistrationBUSD',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'contract IForsage',
        name: '_forsage',
        type: 'address',
      },
      {
        internalType: 'contract IXxx',
        name: '_xxx',
        type: 'address',
      },
      {
        internalType: 'contract IXGold',
        name: '_xGold',
        type: 'address',
      },
      {
        internalType: 'contract IPancakeRouter',
        name: '_pancakeRouter',
        type: 'address',
      },
      {
        internalType: 'contract IXQore',
        name: '_xQore',
        type: 'address',
      },
      {
        internalType: 'contract IXQore',
        name: '_maxQore',
        type: 'address',
      },
    ],
    name: 'init',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxQoreRegistration',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'busdRequest',
        type: 'uint256',
      },
    ],
    name: 'maxQoreRegistrationBusd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'maxQoreUpgrades',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'level',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'busdRequest',
        type: 'uint256',
      },
    ],
    name: 'maxQoreUpgradesBusd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address payable',
        name: '_feeWallet',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_busdFee',
        type: 'uint256',
      },
    ],
    name: 'setFeeData',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'matrixType',
        type: 'uint8',
      },
      {
        internalType: 'uint8[]',
        name: '_levels',
        type: 'uint8[]',
      },
    ],
    name: 'x3x4BuyLevelBatch',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'matrixType',
        type: 'uint8',
      },
      {
        internalType: 'uint8[]',
        name: '_levels',
        type: 'uint8[]',
      },
    ],
    name: 'x3x4BuyLevelBatchBusd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'xGoldActivation',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'xGoldActivationBusd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8[]',
        name: '_levels',
        type: 'uint8[]',
      },
    ],
    name: 'xGoldBuyLevelBatch',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8[]',
        name: '_levels',
        type: 'uint8[]',
      },
    ],
    name: 'xGoldBuyLevelBatchBusd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'xQoreRegistration',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'busdRequest',
        type: 'uint256',
      },
    ],
    name: 'xQoreRegistrationBusd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'level',
        type: 'uint8',
      },
    ],
    name: 'xQoreUpgrades',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'level',
        type: 'uint8',
      },
      {
        internalType: 'uint256',
        name: 'busdRequest',
        type: 'uint256',
      },
    ],
    name: 'xQoreUpgradesBusd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'xxxActivation',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'xxxActivationBusd',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8[]',
        name: '_levels',
        type: 'uint8[]',
      },
    ],
    name: 'xxxBuyLevelBatch',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8[]',
        name: '_levels',
        type: 'uint8[]',
      },
    ],
    name: 'xxxBuyLevelBatchBusd',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
  {
    inputs: [],
    name: 'busd',
    outputs: [
      {
        internalType: 'contract IERC20',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'busdFee',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'contractOwner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeWallet',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'forsage',
    outputs: [
      {
        internalType: 'contract IForsage',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'forsageExpress',
    outputs: [
      {
        internalType: 'contract IForsageExpress',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'forsageLottery',
    outputs: [
      {
        internalType: 'contract IForsageLottery',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'impl',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxDrive',
    outputs: [
      {
        internalType: 'contract IMaxDrive',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'maxQore',
    outputs: [
      {
        internalType: 'contract IXQore',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pancakeRouter',
    outputs: [
      {
        internalType: 'contract IPancakeRouter',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'xGold',
    outputs: [
      {
        internalType: 'contract IXGold',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'xQore',
    outputs: [
      {
        internalType: 'contract IXQore',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'xxx',
    outputs: [
      {
        internalType: 'contract IXxx',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
