import gql from 'graphql-tag'

const ETHER_PRICE = gql`{
    bundle(id: "1" ) {
      ethPrice
    }
   }
`;

const ALL_TOKENS = gql`{
    uniswapFactories(first: 5) {
        id
        pairCount
        totalVolumeUSD
    }
    tokens(first: 100, orderBy: txCount, orderDirection: desc) {
        id
        symbol
        name
        decimals
        totalSupply
        tradeVolume
        tradeVolumeUSD
        untrackedVolumeUSD
        txCount
        totalLiquidity
        derivedETH
    }
    }
`;

export {ETHER_PRICE, ALL_TOKENS}