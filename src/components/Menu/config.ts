import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://www.onyxcash.finance',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://www.onyxcash.exchange/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://www.onyxcash.exchange/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/stake',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Chart',
        href: 'https://poocoin.app/tokens/0x72f7386a1d63485f97c2a9ec0a262ad375e44566',
      },
      {
        label: 'Bscscan',
        href: 'https://bscscan.com/token/0x72f7386a1d63485f97c2a9ec0a262ad375e44566',
      },
//      {
//        label: 'CoinMarketCap',
//        href: 'https://coinmarketcap.com/currencies/goose-finance/',
//      },
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/onyxcash-finance',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/OnyxCashFinance',
      },
      {
        label: 'Docs',
        href: 'https://paper-onyxcash.gitbook.io/onyxcash-finance/',
      },
      {
        label: 'Blog',
        href: 'https://medium.com/@onyxcash.blog',
      },
    ],
  },
//  {
//    label: 'Partnerships/IFO',
//    icon: 'GooseIcon',
//    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
//  },
//  {
//    label: 'Audit by Hacken',
//    icon: 'AuditIcon',
//    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
//  },
//  {
//    label: 'Audit by CertiK',
//    icon: 'AuditIcon',
//    href: 'https://certik.org/projects/goose-finance',
//  },
]

export default config
