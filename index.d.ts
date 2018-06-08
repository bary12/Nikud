import { Stack } from './src';
export interface Runtime {
  stack: Stack;
  stdout: string;
  code: string[];
  position: number;
  disableAutoAdvance: boolean;
}
