export interface TestCase {
  code: string;
  expectedStdout?: string;
  expectedFinalStack?: number[];
  expectedFinalCode?: string;
}