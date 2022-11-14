const defaultState = {
  dollarBalance: 200,
  bitcoinBalance: 0,
  exchangeRate: 1000,
  actions: [],
};

export const reducer = (state = defaultState, action) => {
  const date = Number(new Date());
  const lastAction = {
    date,
    id: date,
    type: action.type,
    amount: action.payload,
  };
  switch (action.type) {
    case "DEPOSIT_DOLLARS":
      lastAction.description = `Balance was topped up by ${lastAction.amount}$`;
      return {
        ...state,
        dollarBalance: state.dollarBalance + lastAction.amount,
        actions: [lastAction, ...state.actions],
      };

    case "WITHDRAW_DOLLARS":
      lastAction.description = `Balance was reduced by ${lastAction.amount}$`;
      return {
        ...state,
        dollarBalance: state.dollarBalance - lastAction.amount,
        actions: [lastAction, ...state.actions],
      };

    case "BUY_BITCOIN":
      lastAction.description = `Purchased ${lastAction.amount} Bitcoin`;
      return {
        ...state,
        dollarBalance: state.dollarBalance - state.exchangeRate,
        bitcoinBalance: state.bitcoinBalance + lastAction.amount,
        actions: [lastAction, ...state.actions],
      };

    case "SELL_BITCOIN":
      lastAction.description = `Sold ${lastAction.amount} Bitcoin`;
      return {
        ...state,
        dollarBalance: state.dollarBalance + state.exchangeRate,
        bitcoinBalance: state.bitcoinBalance - lastAction.amount,
        actions: [lastAction, ...state.actions],
      };

    case "INCREASE_RATE":
      lastAction.description = `Increased Bitcoin price by ${lastAction.amount}$`;
      return {
        ...state,
        exchangeRate: state.exchangeRate + action.payload,
        actions: [lastAction, ...state.actions],
      };

    case "DECREASE_RATE":
      lastAction.description = `Decreased Bitcoin price by ${lastAction.amount}$`;
      return {
        ...state,
        exchangeRate: state.exchangeRate - action.payload,
        actions: [lastAction, ...state.actions],
      };

    default:
      return state;
  }
};
