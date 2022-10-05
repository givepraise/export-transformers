# Aragon straight curve with ceiling

This distribution calculates the period budget using a straight curve with a ceiling. Few praise in a period means small distribution budget and vice versa.

File format: Aragon Transactions

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
