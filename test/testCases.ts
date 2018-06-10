// tslint:disable:max-line-length
import * as _ from 'lodash';
import { TestCase } from './types';

const rmws = (strings: TemplateStringsArray, ...values): string => {
  let output = '';
  for (let i = 0; i < values.length; i++) {
    output += strings[i] + values[i];
  }
  output += strings[values.length];
  return output.replace(/\s+/g, '').replace(/<Space>/g, ' ');
};

const N = {
  shva_pop: 'ְ',
  khatafSegol_push1: 'ֱ',
  khatafPatakh_pushNeg1: 'ֲ',
  khatafKamatz_printUnicode: 'ֳ',
  hiriq_goto: 'ִ',
  tsere_printNumber: 'ֵ',
  segol_dup: 'ֶ',
  patah_add: 'ַ',
  kamatz_mul: 'ָ',
  holam_skip: 'ֹ',
  holamHaser_swap: 'ֺ',
  qubuts_rot: 'ֻ',
  dagesh_inputNumber: 'ּ',
  shin_inputChar: 'ׁ',
};

const helpers = {
  pushTen: rmws`
    ${N.khatafSegol_push1}
    ${N.khatafSegol_push1}
    ${N.patah_add}
    ${N.segol_dup}
    ${N.segol_dup}
    ${N.segol_dup}
    ${N.kamatz_mul}
    ${N.kamatz_mul}
    ${N.patah_add}
  `,
  pow: n => rmws`${_.repeat(N.segol_dup, n - 1)}${_.repeat(N.kamatz_mul, n - 1)}`,
  pushOneHundred: '',
  pushTwo: rmws`
    ${N.khatafSegol_push1}
    ${N.khatafSegol_push1}
    ${N.patah_add}
  `,
};
helpers.pushOneHundred = rmws`
  ${helpers.pushTen}
  ${N.segol_dup}
  ${N.kamatz_mul}
`;

const testCases: TestCase[] = [
  {
    code: '',
    expectedStdout: '',
    expectedFinalCode: '',
    expectedFinalStack: [],
  },
  {
    code: 'None-Niqqud characters',
    expectedStdout: '',
    expectedFinalCode: '',
    expectedFinalStack: [],
  },
  {
    code: rmws`
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.tsere_printNumber}
      ${N.tsere_printNumber}
    `,
    expectedStdout: '11',
    expectedFinalStack: [],
  },
  {
    code: rmws`
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.patah_add}
    `,
    expectedFinalStack: [2],
  },
  {
    code: rmws`
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${N.segol_dup}
      ${N.segol_dup}
    `,
    expectedFinalStack: [2, 2, 2],
  },
  {
    code: rmws`
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${N.segol_dup}
      ${N.segol_dup}
      ${N.kamatz_mul}
    `,
    expectedFinalStack: [2, 4],
  },
  {
    code: rmws`
      א
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${N.segol_dup}
      ${N.segol_dup}
      ${N.kamatz_mul}
      ${N.kamatz_mul}
    `,
    expectedStdout: '',
    expectedFinalStack: [8],
  },
  {
    code: rmws`
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.khatafPatakh_pushNeg1}
      ${N.patah_add}
    `,
    expectedStdout: '',
    expectedFinalStack: [1, 0],
  },
  {
    code: rmws`
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.khatafPatakh_pushNeg1}
      ${N.patah_add}
      ${N.holam_skip}
      ${N.tsere_printNumber}
    `,
    expectedStdout: '1',
    expectedFinalStack: [],
  },
  {
    code: rmws`
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.holam_skip}
      ${N.tsere_printNumber}
    `,
    expectedStdout: '',
    expectedFinalStack: [1],
  },
  {
    code: rmws`
      ${helpers.pushTen}
      ${helpers.pushTen}
      ${helpers.pushTen}
      ${N.patah_add}
      ${N.holamHaser_swap}
    `,
    expectedFinalStack: [20, 10],
    expectedStdout: '',
  },
  {
    code: rmws`
      ${N.khatafSegol_push1}
      ${helpers.pushTwo}
      ${helpers.pushTen}
      ${N.qubuts_rot}
    `,
    expectedFinalStack: [10, 1, 2],
  },
  {
    code: rmws`
      ${N.dagesh_inputNumber}
      ${N.shin_inputChar}
      ${N.dagesh_inputNumber}
    `,
    stdin: '123 123',
    expectedFinalStack: [123, 32, 123],
  },
  {
    code: rmws`
      !
      ${helpers.pushTwo}
      ${helpers.pow(5)}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      d
      ${helpers.pushOneHundred}
      l
      ${helpers.pushOneHundred}
      ${helpers.pushTwo}
      ${helpers.pow(3)}
      ${N.patah_add}
      r
      ${helpers.pushOneHundred}
      ${helpers.pushTen}
      ${helpers.pushTwo}
      ${helpers.pushTwo}
      ${N.patah_add}
      ${N.patah_add}
      ${N.patah_add}
      o
      ${helpers.pushOneHundred}
      ${helpers.pushTen}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${N.patah_add}
      W
      ${helpers.pushTen}
      ${N.segol_dup}
      ${N.patah_add}
      ${N.segol_dup}
      ${N.patah_add}
      ${N.segol_dup}
      ${N.patah_add/*80*/}
      ${helpers.pushTwo}
      ${helpers.pow(3)}
      ${N.khatafPatakh_pushNeg1}
      ${N.patah_add}
      ${N.patah_add}
      <Space>
      ${helpers.pushTwo}
      ${helpers.pow(5)}
      ,
      ${helpers.pushTen}
      ${_.repeat(`${helpers.pushTen}${N.patah_add}`, 3)}
      ${helpers.pushTwo}
      ${helpers.pow(2)}
      ${N.patah_add}
      o
      ${helpers.pushOneHundred}
      ${helpers.pushTen}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${N.patah_add}
      l
      ${helpers.pushOneHundred}
      ${helpers.pushTwo}
      ${helpers.pow(3)}
      ${N.patah_add}
      l
      ${helpers.pushOneHundred}
      ${helpers.pushTwo}
      ${helpers.pow(3)}
      ${N.patah_add}
      e
      ${helpers.pushOneHundred}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      H
      ${helpers.pushTen}
      ${_.repeat(`${helpers.pushTen}${N.patah_add}`, 6)}
      ${helpers.pushTwo}
      ${N.patah_add}

      ${_.repeat(N.khatafKamatz_printUnicode, 13)}
    `,
    expectedStdout: 'Hello, World!',
    expectedFinalStack: [],
  },
  {
    code: `ֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֲֳֳֳֳֳֳֳֳֳֳֳֳֳֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָ`,
    expectedStdout: 'Hello, World!',
    expectedFinalStack: [],
  },
  {
    code: rmws`
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.holamHaser_swap}
      ${N.segol_dup}
      ${N.qubuts_rot}
      ${N.holamHaser_swap}
      ${N.segol_dup}
      ${N.qubuts_rot}
      ${N.patah_add}
      ${N.segol_dup}
      ${N.tsere_printNumber}
      ${N.segol_dup}
      ${N.khatafPatakh_pushNeg1}
      ${N.kamatz_mul}
      ${helpers.pushTwo}
      ${helpers.pow(5)}
      ${helpers.pushTwo}
      ${N.patah_add}
      ${N.patah_add}
      ${helpers.pushOneHundred}
      ${N.holamHaser_swap}
      ${N.holam_skip}
      ${N.hiriq_goto}
      ${helpers.pushTwo}
      ${helpers.pow(5)}
      ${N.khatafKamatz_printUnicode}
      ${N.shva_pop}
      ${helpers.pushTwo}
      ${N.hiriq_goto}
    `,
    expectedStdout: '2 3 5 8 13 21 34',
    expectedFinalStack: [1, 1, 2, 3, 5, 8, 13, 21, 34],
  },
  {
    code: rmws`
      ${/*0*/N.khatafSegol_push1}
      ${N.khatafPatakh_pushNeg1}
      ${N.patah_add}
      ${N.dagesh_inputNumber}
      ${/*4*/N.segol_dup/*Y*/}
      ${N.khatafPatakh_pushNeg1}
      ${N.patah_add}
      ${N.segol_dup}
      ${/*8*/N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${N.segol_dup}
      ${/*12*/N.patah_add}
      ${N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${/*16*/N.segol_dup}
      ${N.patah_add}
      ${N.segol_dup}
      ${N.patah_add}
      ${/*20*/N.segol_dup}
      ${N.patah_add}
      ${N.segol_dup}
      ${N.patah_add}
      ${/*24*/N.qubuts_rot}
      ${N.qubuts_rot}
      ${N.holam_skip}
      ${N.hiriq_goto/*GOTO X*/}
      ${/*28*/N.shva_pop}
      ${N.hiriq_goto/*GOTO Y*/}
      ${N.khatafSegol_push1}
      ${N.shva_pop}
      ${/*32*/N.shva_pop/*X*/}
      ${N.shva_pop}
      ${/*34*/N.holamHaser_swap/*T*/}
      ${N.segol_dup}
      ${/*36*/N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${N.segol_dup}
      ${/*40*/N.patah_add}
      ${N.segol_dup}
      ${N.patah_add}
      ${N.segol_dup}
      ${/*44*/N.patah_add}
      ${N.segol_dup}
      ${N.patah_add}
      ${N.segol_dup}
      ${/*48*/N.segol_dup}
      ${N.patah_add}
      ${N.patah_add/*96*/}
      ${N.holamHaser_swap}
      ${/*52*/N.holam_skip}
      ${N.hiriq_goto}
      ${N.shva_pop}
      ${N.kamatz_mul}
      ${/*56*/N.khatafSegol_push1}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${N.segol_dup}
      ${/*60*/N.patah_add}
      ${N.segol_dup}
      ${N.patah_add}
      ${N.segol_dup}
      ${/*64*/N.patah_add}
      ${N.segol_dup}
      ${N.patah_add}
      ${N.khatafSegol_push1}
      ${/*68*/N.patah_add}
      ${N.khatafSegol_push1}
      ${N.patah_add}
      ${N.hiriq_goto}
      ${_.repeat(`${N.khatafSegol_push1}${N.shva_pop}`, 12)}
      ${N.shva_pop}
      ${N.tsere_printNumber}
    `,
    stdin: '5',
    expectedStdout: '120',
  },
];

export default testCases;
