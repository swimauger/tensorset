const tf = require('@tensorflow/tfjs');

class Tensorset {
    static parse(data) {
        return JSON.parse(data).reduce((dataset, { label, values, shape }) => {
            return {
                ...dataset,
                [label]: tf.tensor(values, shape)
            };
        }, {});
    }

    static async stringify(dataset) {
        return JSON.stringify(
            await Promise.all(Object.entries(dataset).map(async ([label, value]) => {
                return {
                    label,
                    values: Array.from(await value.data()),
                    shape: value.shape
                }
            }))
        );
    }
}

module.exports = Tensorset;