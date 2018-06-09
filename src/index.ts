import * as _ from 'lodash';
import { Runtime } from '..';

class RuntimeException extends Error { }

export class Stack {
  private items: number[] = [];
  public pop(): number {
    if (this.items.length === 0) {
      throw new RuntimeException(`Can't pop from stack, the stack is empty`);
    }
    return this.items.pop();
  }
  public push(item: number): void {
    this.items.push(item);
  }
  public unshift(item: number): void {
    this.items.unshift(item);
  }
  public shift(): number {
    return this.items.shift();
  }
  public __getItems(): number[] {
    return this.items;
  }
}

export const operators: {
  [key: string]: {
    operation: (runtime: Runtime) => void,
    description: string,
  },
} = {
  [String.fromCharCode(0x5B0)]: {
    operation({ stack }) {
      stack.pop();
    },
    description: '(DROP) Pops the top value of the stack and discards it.',
  },
  [String.fromCharCode(0x5B1)]: {
    operation({ stack }) {
      stack.push(1);
    },
    description: '(PUSH 1) Pushes 1 to the top of the stack',
  },
  [String.fromCharCode(0x5B2)]: {
    operation({ stack }) {
      stack.push(-1);
    },
    description: '(PUSH -1) Pushes -1 to the top of the stack',
  },
  [String.fromCharCode(0x5B3)]: {
    operation(runtime) {
      runtime.stdout += String.fromCharCode(runtime.stack.pop());
    },
    description: 'Pops the top of the stack and prints the unicode character with that charcode',
  },
  [String.fromCharCode(0x5B4)]: {
    operation(runtime) {
      runtime.position = runtime.stack.pop();
      runtime.disableAutoAdvance = true;
    },
    description: `(GOTO) Pops the top of the stack and performs a GOTO to the character at that position
(Non-Niqqud characters are ignored)`,
  },
  [String.fromCharCode(0x5B5)]: {
    operation(runtime) {
      runtime.stdout += String(runtime.stack.pop());
    },
    description: 'Pops the top of the stack and prints it as a number ',
  },
  [String.fromCharCode(0x5B6)]: {
    operation({ stack }) {
      const pop = stack.pop();
      stack.push(pop);
      stack.push(pop);
    },
    description: '(DUP) Duplicated the top of the stack.',
  },
  [String.fromCharCode(0x5B7)]: {
    operation({ stack }) {
      stack.push(stack.pop() + stack.pop());
    },
    description: '(ADD) Pops the two elements at the top of the stack, adds them, and returns the result to the stack',
  },
  [String.fromCharCode(0x5B8)]: {
    operation({ stack }) {
      stack.push(stack.pop() * stack.pop());
    },
    description: `(MULT) Pops the two elements at the top of the stack, Multiplies them,
and returns the result to the stack`,
  },
  [String.fromCharCode(0x5B9)]: {
    operation(runtime) {
      if (runtime.stack.pop() !== 0) {
        runtime.position++;
      }
    },
    description: `(SKIP NON-ZERO) Pops the top of the stack. If that element is non-zero,
the next operator will be skipped.`,
  },
  [String.fromCharCode(0x5BA)]: {
    operation({ stack }) {
      const one = stack.pop();
      const two = stack.pop();
      stack.push(one);
      stack.push(two);
    },
    description: '(SWAP) Swaps the two items at the top of the stack',
  },
  [String.fromCharCode(0x5BB)]: {
    operation({ stack }) {
      const a = stack.pop();
      const b = stack.pop();
      const c = stack.pop();
      stack.push(a);
      stack.push(c);
      stack.push(b);
    },
    description: '(ROT) Moves the third-to-last item to the top of the stack',
  },
};

export function interpreter(sourceCode: string, maxOps: number = 100000): Runtime {
  const runtime: Runtime = {
    stack: new Stack(),
    stdout: '',
    code: sourceCode
      .split('')
      .filter(char => char in operators),
    position: 0,
    disableAutoAdvance: false,
  };

  let numOps = 0;

  while (runtime.position < runtime.code.length) {
    operators[runtime.code[runtime.position]].operation(runtime);
    numOps++;
    if (!runtime.disableAutoAdvance) {
      runtime.position++;
    }
    runtime.disableAutoAdvance = false;
    if (numOps >= maxOps) {
      throw new RuntimeException(
        `Program did more than the max operations ${maxOps} so we stopped it. Check for infinite loops`,
      );
    }
  }

  return runtime;
}
