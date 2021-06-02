import * as tf from '@tensorflow/tfjs';
import * as tfCore from '@tensorflow/tfjs-core';

/**
* Tensorset is a class used similarly to JSON for stringifying
* and parsing Google's KNN Classifier datasets
* @author Mark Auger
* @version 1.2.8
* @social Follow me on GitHub at https://github.com/swimauger
* @license
* Copyright (c) 2020 Mark Auger
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* @homepage https://github.com/swimauger/tensorset#readme
* @issues https://github.com/swimauger/tensorset/issues
**/
class Tensorset {
  static default = Tensorset;

  /**
  * Parse stringified version of Tensorset generated by `Tensorset.stringify`
  * @param {string} data - Stringified tensorset file generated with assistance of `Tensorset.stringify`
  * @example
  * const dataset = Tensorset.parse(data);
  * @returns { [label: string]: Tensor2D } Returns KNN Classifier readable dataset
  **/
  static parse(data: string): { [label: string]: tf.Tensor2D | tfCore.Tensor2D } {
    return JSON.parse(data).reduce(
        (dataset: any, {label, values, shape}: any) => {
          return {
            ...dataset,
            [label]: tf.tensor(values, shape),
          };
        }, {},
    );
  }

  /**
  * Stringify Google's KNN Classifier `getClassifierDataset` method
  * @param {any} dataset - JSON parsed version of `Tensorset.parse`
  * @example
  * const data = await Tensorset.stringify(dataset);
  * @returns {Promise<string>} Returns stringified tensorset of KNN Classifier dataset
  **/
  static async stringify(dataset: any): Promise<string> {
    return JSON.stringify(
        await Promise.all(
            Object.entries(dataset).map(
                async ([label, value]: any[]) => {
                  return {
                    label,
                    values: Array.from(await value.data()),
                    shape: value.shape,
                  };
                },
            ),
        ),
    );
  }
}

export = Tensorset;
