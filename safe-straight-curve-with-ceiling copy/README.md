# Gnosis Safe, CSV Airdrop, Straight Curve with Ceiling

This distribution calculates the period budget using a straight curve with a ceiling. Few praise in a period means small distribution budget and vice versa.

Simulate results here: [Observable - Straight curve with ceiling](https://observablehq.com/@kristofer/praise-straight-curve-with-ceiling)

![curve](curve.png)

### Export format

File format: Safe - CSV Airdrop

> Send arbitrarily many distinct tokens, to arbitrarily many distinct accounts with various different values from a CSV file in a single transaction.

## Context parameters

```
"context": {
  "ceiling": "number",
  "cutoff": "number",
  "tokenType": "string",
  "tokenAddress": "string"
}
```

### `ceiling`

The maximum amount of tokens that can be distributed during the distribution period.

### `cutoff`

The point where the curve reaches the ceiling. If a period has more praise than the cutoff, the `ceiling` will be used as the period budget.

### `tokenType`

The type of token that is being transferred. One of erc20, nft or native. NFT Tokens can be either ERC721 or ERC1155.

### `tokenAddress`

Ethereum address of ERC20 token to be transferred. This has to be left blank for native (ETH) transfers.
