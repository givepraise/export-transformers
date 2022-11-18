# Praise Export Transformers

This repository contains transformers for creating custom Praise exports and token distributions.

Paste the url of the raw transformer file into the Custom Exports tab of the Praise settings to use.

For full reference on the transformer map format, see [ses-node-json-transform](https://github.com/kristoferlund/ses-node-json-transform).

## Transformer Schema

```javascript
interface ExportTransformerMap {
  name: string;
  map: {
    item: Object,
    operate: ExportTransformerOperateItem[],
    each: string,
  };
  context: {};
  filterColumn: string;
  includeCsvHeaderRow?: boolean;
}

interface ExportTransformerOperateItem {
  run: string;
  on: string;
}
```

### ExportTransformerOperateItem

`run` accepts a string with a function to be evaluated.

- The function must return a value.
- Function accepts two parameters: `val` and `context`.
- Example: `(val) => val.toUpperCase()`;

`on` accepts a string of the name of the property to run the function on.

## Input data

Each item processed by the transformer contain the following info:

```javascript
interface PeriodDetailsGiverReceiverDto {
  _id: string;
  praiseCount: number;
  identityEthAddress?: string;
  rewardsEthAddress?: string;
  scoreRealized: number;
  userAccount: UserAccountDto;
}

interface UserAccountDto {
  _id: string;
  user?: string;
  accountId: string;
  name: string; // Jim#1224
  nameRealized: string; // Jim
  avatarId?: string;
  platform: string; // 'DISCORD'
}
```

## Context parameters

In addition to the context parameters defined in the transformer and praise settings, the following parameters are also available:

```javascript
praiseItemsCount: number; // Total number of praise items in the period
totalPraiseScore: number; // Total praise score in the period
```

## Globals

Since the transformers are evaluated in a secure sandbox, only the following globals are available:

```
Math
```
