# Aragon straight curve with ceiling

This distribution calculates the period budget using a straight curve with a ceiling. Few praise in a period means small distribution budget and vice versa.

Simulate results here: [Observable - Straight curve with ceiling](https://observablehq.com/@kristofer/praise-straight-curve-with-ceiling)

![curve](curve.png)

### Export format

File format: [Aragon Transactions](https://docs.evmcrispr.blossom.software/aragonOS/transactions) CSV

The transactions app is a custom aragon app built by 1hive. It allows users to create a single DAO vote to transfer or mint tokens to multiple addresses.

## Context parameters

```
"context": {
 "ceiling": "number",
  "cutoff": "number",
  "token": "string"
}
```

### `ceiling`

The maximum amount of tokens that can be distributed during the distribution period.

### `cutoff`

The point where the curve reaches the ceiling. If a period has more praise than the cutoff, the `ceiling` will be used as the period budget.

### `token`

The name of the token that will be distributed.
