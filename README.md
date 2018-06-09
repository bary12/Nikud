# Nikud

If Brainfuck wasn't enough for you, get used to programming with tiny diacritics that cram together in the width of a single character.

Nikud is an esoteric stack-based programming language based solely on the Hebrew [Niqqud](https://en.wikipedia.org/wiki/Niqqud) diacritics. All other characters are ignored.

## Examples

The following code (345 bytes) outputs `Hello world!`

```
 ֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֲֳֳֳֳֳֳֳֳֳֳֳֳֳֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָ
```

or in a _slightly_ more verbose way, `!ֱֱֱֶֶֶֶַַָָָָdֱֱֶֶֶֶַַָָָlֱֱֱֱֶֶֶֶֶֶַַַַָָָָָrֱֱֱֱֱֱֱֱֶֶֶֶֶֶֶַַַַַַַַַָָָָָoֱֱֱֱֱֶֶֶֶֶֶֶַַַַַַָָָָָwֱֱֱֱֱֱֲֶֶֶֶֶֶֶֶֶֶַַַַַַַַַָָָָָָָ ֱֱֶֶֶֶַָָָָ,ֱֱֱֱֱֱֱֱֱֱֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַַַַַָָָָָָָָָoֱֱֱֱֱֶֶֶֶֶֶֶַַַַַַָָָָָlֱֱֱֱֶֶֶֶֶֶַַַַָָָָָlֱֱֱֱֶֶֶֶֶֶַַַַָָָָָeֱֱֱֶֶֶֶַַַָָָHֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֳֳֳֳֳֳֳֳֳֳֳֳֳֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַַַַַַַַַַַַַַָָָָָָָָָָָָָָ` outputs the same thing. Remember, non-Niqqud characters are ignored.

The code ` ְֱֱֱֱֱֱֱֱֱֱֱֱֲֳִִֵֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַָָָָָָָָָָָָֺֺֺֹֻֻ` (62 bytes) outputs `2 3 5 8 13 21 34`, and can be changed to support arbitrarely large Fibonnaci numbers.

## Supported operations

### אְ
(DROP) Pops the top value of the stack and discards it.

### אֱ
(PUSH 1) Pushes 1 to the top of the stack

### אֲ
(PUSH -1) Pushes -1 to the top of the stack

### אֳ
Pops the top of the stack and prints the unicode character with that charcode

### אִ
(GOTO) Pops the top of the stack and performs a GOTO to the character at that position
(Non-Niqqud characters are ignored)

### אֵ
Pops the top of the stack and prints it as a number 

### אֶ
(DUP) Duplicated the top of the stack.

### אַ
(ADD) Pops the two elements at the top of the stack, adds them, and returns the result to the stack

### אָ
(MULT) Pops the two elements at the top of the stack, Multiplies them,
and returns the result to the stack

### אֹ
(SKIP NON-ZERO) Pops the top of the stack. If that element is non-zero,
the next operator will be skipped.

### אֺ
(SWAP) Swaps the two items at the top of the stack

### אֻ
(ROT) Moves the third-to-last item to the top of the stack


