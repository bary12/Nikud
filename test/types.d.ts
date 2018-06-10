export interface TestCase {
  code: string;
  stdin?: string;
  expectedStdout?: string;
  expectedFinalStack?: number[];
  expectedFinalCode?: string;
}