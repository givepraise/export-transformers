export const map = {
  name: "Aragon Token Distribution",
  item: {
    address: "ethereumAddress",
    amount: "scoreRealized",
    token: "context.token",
  },
  operate: [
    {
      run: function (val, context) {
        return (val / context.totalPraiseScore) * context.budget;
      },
      on: "amount",
    },
  ],
  each: function (item, index, collection, context) {
    item.token = context.token;
    return item;
  },
};
