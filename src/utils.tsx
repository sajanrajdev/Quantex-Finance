  import {ethers} from 'ethers'  
  
  // Function to capitalize a string
  const capitalize = (s: string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  // Function to format integers into a certain currency
  const currencyFormatter = (number: number, currency: string) =>
    new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 2
  }).format(number);

  // Function to format numbers into 2 decimal point fixed percentages
  const percentageFormatter = (number: number) => {
    if(number != null){
      var percentage = number.toFixed(2) + "%";
      return percentage;
   } 
   else{
     return "N/A";
   }
  }
  // Function to truncate a string to a certain length
  const truncateString = (str: string | null, num: number) => {
    if(str == null){
        return null
    }
    if (str.length <= num) {
        return str
    }
    return str.slice(0, num) + '...'
  }

    // Function to truncate a string to a certain length
    const truncateAddress = (str: string | null) => {
      if(str == null){
          return null
      }
      return str.slice(0, 6) + '...' + str.slice(str.length - 4, str.length)
    }

  // Function to sort calculate the prices and totalLiquidity in USD and sort the token list in terms of this last one
  const sortTokenList = (tokenslist: any[], ethPrice: number) => {
    var sortedItems = tokenslist.map(
      token => ({...token, totalLiquidity: token.totalLiquidity.valueOf()*token.derivedETH.valueOf()*ethPrice, price: token.derivedETH.valueOf()*ethPrice})
    ); // create a new array of items with totalLiquidity and Price added
    sortedItems = sortedItems.sort((a,b) => a['totalLiquidity'] < b['totalLiquidity'] ? 1 : -1); //Sorts desc based on TotalLiquidity
    sortedItems = sortedItems.map(
      token => ({...token, totalLiquidity: currencyFormatter(token.totalLiquidity, 'usd'), price: currencyFormatter(token.price, 'usd')})
    ); // Format total liquidity and price to USD
    return sortedItems;
  }

  // Function to return Token data based on a given symbol
  const getTokenBySymbol = (tokenslist: any[], selectedSymbol: string) => {
    var selectedToken = tokenslist.find(x => x.symbol === selectedSymbol)
        /* console.log(selectedToken); */
      return (selectedToken);
    }

  // Function to return Token data based on a given ID
  const getTokensByID = (tokenslist: any[], selectedKeys: any[] | any) => {
    var selectedTokens: any[] = []
    let i: number = 0
    if(selectedKeys){
      selectedKeys.forEach((element: any[] | any) => {
        selectedTokens[i] = tokenslist.find(x => x.id === element)
        i++;
      });
      return (selectedTokens);
    }
  }

  // Function to convert a number into HEX
  function toHex(amount: any) {
    return `0x${amount.toString(16)}`
}

  // Function to return an array without a given entry
  function spliceNoMutate(myArray: any | any[], tokenToRemove: any) {
    if( tokenToRemove == '' ){
      return myArray;
    }
    else{
      var token = getTokenBySymbol(myArray, tokenToRemove)
      var indexToRemove = myArray.indexOf(token)
      return myArray.slice(0, indexToRemove).concat(myArray.slice(indexToRemove+1));
    }
  }

  // Function to return a network name 
  function networkName(id: number | string) {
    switch (Number(id)) {
      case 1:
        return 'main'
      case 3:
        return 'ropsten'
      case 4:
        return 'rinkeby'
      case 5:
        return 'goerli'
      case 42:
        return 'kovan'
      default:
        return 'local'
    }
  }

  const getERC20TokenBalance = async (token: any, address: string, provider: any) => {
    const contractAbiFragment = [
      {
        name: 'balanceOf',
        type: 'function',
        inputs: [
          {
            name: '_owner',
            type: 'address',
          },
        ],
        outputs: [
          {
            name: 'balance',
            type: 'uint256',
          },
        ],
        constant: true,
        payable: false,
      },
    ];

    const contract = new ethers.Contract(token.address, contractAbiFragment, provider);
  
    const balance = await contract.balanceOf(address);
  
    return (parseFloat(balance)/(10**parseInt(token.decimals))).toString();
  }

  const fetchBalance = async (provider: any, address: string | undefined, token1: any, setBalance: any) => {
    if(provider && address!=null){
      if(token1.symbol == 'WETH'){
        let ETHBalance = await provider.getBalance(address);
        setBalance(ethers.utils.formatEther(ETHBalance))
      }
      else{
        let ERC20Balance = await getERC20TokenBalance(token1, address, provider);
        setBalance(ERC20Balance);
      }
    }
  };

  export {percentageFormatter, 
    currencyFormatter, 
    capitalize, 
    truncateString, 
    sortTokenList, 
    getTokenBySymbol, 
    getTokensByID, 
    toHex, 
    networkName, 
    truncateAddress,
    spliceNoMutate,
    getERC20TokenBalance,
    fetchBalance}