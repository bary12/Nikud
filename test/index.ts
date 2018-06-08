import * as assert from 'assert';
import { interpreter } from '../src';
import testCases from './testCases';
describe('Nikud Tests', () => {
  testCases.forEach(testCase => {
    it(testCase.code, () => {
      const finalState = interpreter(testCase.code);
      if (testCase.expectedStdout) {
        assert.strictEqual(finalState.stdout, testCase.expectedStdout);
      }
      if (testCase.expectedFinalStack) {
        assert.deepStrictEqual(finalState.stack.__getItems(), testCase.expectedFinalStack);
      }
      if (testCase.expectedFinalCode) {
        assert.strictEqual(finalState.code, testCase.expectedFinalCode);
      }
    });
  });
});
