import Notify from 'bnc-notify'
import Onboard from 'bnc-onboard'

const networkId = 4
const rpcUrl = 'https://rinkeby.infura.io/v3/d7da0df84bee438db5954b908cfbdf2e'
const dappId = '0d211383-2d64-4bea-a170-715d44fc0c7e'

export function initOnboard(subscriptions: any) {
  const onboard = Onboard
  return onboard({
    dappId,
    hideBranding: false,
    networkId,
    subscriptions,
    walletSelect: {
      wallets: [
        { walletName: 'metamask' },
        {
          walletName: 'ledger',
          rpcUrl
        },
        { walletName: 'authereum', disableNotifications: true },
        {
          walletName: 'lattice',
          appName: 'Uniswap Remote Trader',
          rpcUrl
        },
        { walletName: 'coinbase' },
        { walletName: 'status' },
        { walletName: 'walletLink', rpcUrl },
        { walletName: 'torus' },
        { walletName: 'trust', rpcUrl },
        { walletName: 'opera' },
        { walletName: 'operaTouch' },
        { walletName: 'imToken', rpcUrl },
        { walletName: 'meetone' },
        { walletName: 'mykey', rpcUrl },
        { walletName: 'wallet.io', rpcUrl },
        { walletName: 'huobiwallet', rpcUrl },
        { walletName: 'hyperpay' },
        { walletName: 'atoken' },
      ]
    },
    walletCheck: [
      { checkName: 'derivationPath' },
      { checkName: 'connect' },
      { checkName: 'accounts' },
      { checkName: 'network' },
      { checkName: 'balance', minimumBalance: '100000' }
    ]
  })
}

export function initNotify() {
  const notify = Notify
  return notify({
    dappId,
    networkId,
  })
}
