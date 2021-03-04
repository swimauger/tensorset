import * as tf from "@tensorflow/tfjs";
import { Tensor2D } from "@tensorflow/tfjs";

interface TensorsetType {
    [label: string]: Tensor2D;
}

interface TensorData {
    label: string;
    values: number[];
    shape: number[];
}

export = class Tensorset {
    static parse(data: string): TensorsetType {
        return JSON.parse(data).reduce((dataset: any, { label, values, shape }: TensorData) => {
            return {
                ...dataset,
                [label]: tf.tensor(values, shape)
            };
        }, {});
    }

    static async stringify(dataset: Tensorset): Promise<string> {
        return JSON.stringify(
            await Promise.all(Object.entries(dataset).map(async ([label, value]: any[]) => {
                return {
                    label,
                    values: Array.from(await value.data()),
                    shape: value.shape
                }
            }))
        );
    }
}
