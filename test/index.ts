import * as assert from 'assert';
import { interpreter } from '../src';
import testCases from './testCases';
describe('Nikud Tests', () => {
  testCases.forEach(testCase => {
    it(testCase.code, () => {
      const finalState = interpreter(testCase.code, testCase.stdin || '', true);
      if (testCase.expectedStdout) {
        assert.strictEqual(
          finalState.stdout,
          testCase.expectedStdout,
          JSON.stringify(finalState.debug),
        );
      }
      if (testCase.expectedFinalStack) {
        assert.deepStrictEqual(
          finalState.stack.__getItems(),
          testCase.expectedFinalStack,
          JSON.stringify(finalState.debug),
        );
      }
      if (testCase.expectedFinalCode) {
        assert.strictEqual(
          finalState.code,
          testCase.expectedFinalCode,
          JSON.stringify(finalState.debug),
        );
      }
    });
  });
});
