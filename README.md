# Tensorset

![](https://img.shields.io/npm/dw/tensorset?color=16697A&style=for-the-badge)
![](https://img.shields.io/npm/v/tensorset?color=DB6400&style=for-the-badge)
![](https://img.shields.io/github/license/swimauger/tensorset?color=FFA62B&style=for-the-badge)

TensorflowJS Dataset parsing and stringifying

## **Installation**

`npm install tensorset # or yarn add tensorset`

<br>

## **Getting Started**
```javascript
    // CommonJS
    const Tensorset = require('tensorset');

    // Or ES Modules
    import Tensorset from "tensorset/lib/Tensorset";
```

<br>

## parse (sync)
Parse stringified version of Tensorset generated by `Tensorset.stringify`
```JavaScript
    const dataset = Tensorset.parse(data);
```
| Parameter | Type     | Description                                                                   | Required |
| :-------: | :------: | :---------------------------------------------------------------------------- | :------: |
| data      | String   | Stringified tensorset file generated with assistance of `Tensorset.stringify` | True     |

## stringify (async)
Stringify tensorsets supplied by TensorflowJS models via the `getClassifierDataset` method in knnClassifier
```JavaScript
    const data = await Tensorset.stringify(dataset);
```
| Parameter | Type     | Description                              | Required |
| :-------: | :------: | :--------------------------------------- | :------: |
| dataset   | Object   | JSON parsed version of `Tensorset.parse` | True     |
