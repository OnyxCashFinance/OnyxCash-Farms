import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'OXC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xa59a33091577a21adb26cfb4c8275abd3095d1d2',
    },
    tokenSymbol: 'OXC',
    tokenAddresses: {
      97: '',
      56: '0x72f7386A1d63485f97C2a9eC0a262ad375e44566',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'OXC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x635d16c43f0971f8edd4e62cab1fb58b29c86a4a',
    },
    tokenSymbol: 'OXC',
    tokenAddresses: {
      97: '',
      56: '0x72f7386A1d63485f97C2a9eC0a262ad375e44566',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    risk: 5,
    lpSymbol: 'TSC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x3643cb05c208d630fef93e2070bc7a4fbf4df122',
    },
    tokenSymbol: 'TSC',
    tokenAddresses: {
      97: '',
      56: '0x8cde207ca2b469253586aec336f625eb0b82a4cb',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    risk: 5,
    lpSymbol: 'TSC-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa8661C8f8794F7067917e4Dd6d3970c38835342c',
    },
    tokenSymbol: 'TSC',
    tokenAddresses: {
      97: '',
      56: '0x8cde207ca2b469253586aec336f625eb0b82a4cb',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    risk: 3,
    lpSymbol: 'OXC-TSC LP',
    lpAddresses: {
      97: '',
      56: '0x2c3a4a6700dc725e1d450dd3f2bee5ed6ef97dc0',
    },
    tokenSymbol: 'OXC',
    tokenAddresses: {
      97: '',
      56: '0x72f7386a1d63485f97c2a9ec0a262ad375e44566',
    },
    quoteTokenSymbol: QuoteToken.TSC,
    quoteTokenAdresses: contracts.tsc,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'OXC',
    lpAddresses: {
      97: '',
      56: '0xa59a33091577a21adb26cfb4c8275abd3095d1d2', // OXC-BUSD LP
    },
    tokenSymbol: 'OXC',
    tokenAddresses: {
      97: '',
      56: '0x72f7386A1d63485f97C2a9eC0a262ad375e44566',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0xa59a33091577a21adb26cfb4c8275abd3095d1d2', // OXC-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '',
      56: '0x1B96B92314C44b159149f7E0303511fB2Fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'TSC',
    lpAddresses: {
      97: '',
      56: '0x3643cb05c208d630fef93e2070bc7a4fbf4df122', // TSC-BUSD LP
    },
    tokenSymbol: 'TSC',
    tokenAddresses: {
      97: '',
      56: '0x8cde207ca2b469253586aec336f625eb0b82a4cb',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3E22c912A276550F3E5FE3b0Deb87B55aCd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x680dd100e4b394bda26a59dd5c119a391e747d18', // USDC-BUSD LP
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
