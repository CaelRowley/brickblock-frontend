import extend from 'xtend';
let newState;

// const jsonData = {
//   contributionsvertime: "https://public.tableau.com/views/ContributionsOverTime_0/ContributionsOverTime?:embed=y&:display_count=yes",
//   piechart: "https://public.tableau.com/views/PieChart_162/PieChart?:embed=y&:display_count=yes",
//   bubbleschart: "https://public.tableau.com/views/BubblesChart/BubblesChart?:embed=y&:display_count=yes",
//   transacionsvstimeaddressess: "https://public.tableau.com/views/NumberofTransactionsvsValueAddresses/NumberofTransactionsvsValueAddresses?:embed=y&:display_count=yes",
//   transactionsvstimecurrencies: "https://public.tableau.com/views/NumberofTransactionsvsValueCurrencies/NumberofTransactionsvsValueCurrencies?:embed=y&:display_count=yes",
// }

const tableauReducers = (state, action) => {
  var defaultState = extend({
    tableauUrl: "https://public.tableau.com/views/ContributionsOverTime_0/ContributionsOverTime?:embed=y&:display_count=yes&:refresh=yes"
  }, state);

  switch (action.type) {
    case 'UPDATE_TABLEAU_URL':
      console.log("in reducer: " + action.tableauUrl);
      newState = extend(defaultState, {
        tableauUrl: action.tableauUrl
      })
      console.log(newState);
      return newState
    default:
      return defaultState
  }
}

export default tableauReducers;


// const stake = (state, action) => {
//   var stakeState = extend({
//     intro: "Stake Token  (STK)",
//     welcomeText: "The future of crypto economics",
//     stakeAddress: STAKEADDRESS,
//     contractAddress: RINKEBY,
//     loaded: false,
//     hasStakerAccount: false,
//     numberOfTokens: 0,
//     time: null,
//     returnTokens: null,
//     redeemed: null,
//     precentGained: null,
//   }, state)