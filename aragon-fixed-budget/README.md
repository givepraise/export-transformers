# Aragon fixed budget

This distribution uses a fixed period budget and a straight proportional distribution. A praise receiver with 1% of the total praise score will receive 1% of the period budget.

### Export format

File format: [Aragon Transactions](https://docs.evmcrispr.blossom.software/aragonOS/transactions) CSV

The transactions app is a custom aragon app built by 1hive. It allows users to create a single DAO vote to transfer or mint tokens to multiple addresses.

## Context parameters

```
"context": {
  "budget": "number",
  "token": "string"
}
```

### `budget`

The amount of tokens that will be distributed during the distribution period.

### `token`

The name of the token that will be distributed.
