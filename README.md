# Tensorset

![](https://img.shields.io/npm/dw/tensorset?style=for-the-badge)
![](https://img.shields.io/npm/v/tensorset?style=for-the-badge)
![](https://img.shields.io/github/license/swimauger/tensorset?style=for-the-badge)

TensorflowJS Dataset parsing and stringifying

## parse (sync)
Parse stringified version of Tensorset generated by `Tensorset.stringify`
```JavaScript
    const dataset = Tensorset.parse(data);
```
| Parameter | Type     | Description                                                                 | Required |
| :-------: | :------: | :-------------------------------------------------------------------------- | :------: |
| data      | String   | Stringified tensorset file generated with assistance of `Tensorset.stringify` | True     |

## stringify (async)
Stringify tensorsets supplied by TensorflowJS models via the `getClassifierDataset` method in knnClassifier
```JavaScript
    const data = await Tensorset.stringify(dataset);
```
| Parameter | Type     | Description                              | Required |
| :-------: | :------: | :--------------------------------------- | :------: |
| dataset   | Object   | JSON parsed version of `Tensorset.parse` | True     |

<hr>

## Contributions
<a href="https://github.com/swimauger/image-classifier/graphs/contributors">
  <img src="https://contributors-img.firebaseapp.com/image?repo=swimauger/image-classifier" />
</a>