# Praise Export Transformers

This repository contains transformers for creating custom Praise exports and token distributions.

Paste the url of the raw transformer file into the Custom Exports tab of the Praise settings to use.

Praise custom exports use a slightly modified version of [node-json-transform](https://github.com/bozzltron/node-json-transform).

## Transformer Schema

```javascript
interface ExportTransformerOperateItem {
  run: string;
  on: string;
}

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
```

## Input data

Each item processed by the transformer contain the following info:

```javascript
interface UserAccountDto {
  _id: string;
  user?: string;
  accountId: string;
  name: string; // Jim#1224
  nameRealized: string; // Jim
  avatarId?: string;
  platform: string; // 'DISCORD'
}

interface PeriodDetailsGiverReceiverDto {
  _id: string;
  praiseCount: number;
  ethereumAddress?: string;
  scoreRealized: number;
  userAccount: UserAccountDto;
}
```

## Context parameters

In addition to the context parameters defined in the transformer and praise settings, the following parameters are also available:

```javascript
praiseItemsCount: number; // Total number of praise items in the period
totalPraiseScore: number; // Total praise score in the period
```
