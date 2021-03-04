const fs = require('fs/promises');
const path = require('path');
const { Tensorset } = require('../lib/Tensorset');
const DATASET_PATH = path.resolve(__dirname, 'dataset.json');

describe('tensorset library tests', () => {
  test('tensorset parse legitimate dataset', async () => {
    const data = await fs.readFile(DATASET_PATH, { encoding: 'utf-8' });
    expect(Tensorset.parse(data)).toBeDefined();
  });

  test('tensorset parse illegitimate dataset', () => {
      try {
        Tensorset.parse('{"a": { "b": "c" }}');
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError);
      }
  });

  test('tensorset stringify legitimate dataset', async () => {
    const data = await fs.readFile(DATASET_PATH, { encoding: 'utf-8' });
    const dataset = Tensorset.parse(data);
    expect(Tensorset.stringify(dataset)).resolves.toBeDefined();
  });

  test('tensorset stringify illegitimate dataset', async () => {
    expect(Tensorset.stringify({ "a": { "b": "c" } })).rejects.toBeDefined();
  });
});