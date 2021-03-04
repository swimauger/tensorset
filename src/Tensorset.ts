import * as tf from "@tensorflow/tfjs";

export class Tensorset {
    static parse(data: string) {
        return JSON.parse(data).reduce((dataset: any, { label, values, shape }: { label: any, values: any, shape: any }) => {
            return {
                ...dataset,
                [label]: tf.tensor(values, shape)
            };
        }, {});
    }

    static async stringify(dataset: any) {
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
