import { Stack } from './src';
export interface Runtime {
  stack: Stack;
  stdout: string;
  stdin: string;
  code: string[];
  position: number;
  disableAutoAdvance: boolean;
  debug?: number[][];
}
