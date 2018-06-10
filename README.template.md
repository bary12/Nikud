# Nikud

If Brainfuck wasn't enough for you, get used to programming with tiny diacritics that cram together in the width of a single character.

Nikud is an esoteric stack-based programming language based solely on the Hebrew [Niqqud](https://en.wikipedia.org/wiki/Niqqud) diacritics. All other characters are ignored. [Try it Online](https://bary12.github.io/esolangs/nikud/)

## Examples

The following code (336 bytes) outputs `Hello, World!`
```ֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֲֳֳֳֳֳֳֳֳֳֳֳֳֳֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַַָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָָ```

or in a _slightly_ more verbose way, ` !ֱֱֱֶֶֶֶַַָָָָdֱֱֶֶֶֶַַָָָlֱֱֱֱֶֶֶֶֶֶַַַַָָָָָrֱֱֱֱֱֱֱֱֶֶֶֶֶֶֶַַַַַַַַַָָָָָoֱֱֱֱֱֶֶֶֶֶֶֶַַַַַַָָָָָWֱֱֱֱֲֶֶֶֶֶֶֶֶַַַַַַַַָָָָ ֱֱֶֶֶֶַָָָָ,ֱֱֱֱֱֱֱֱֱֱֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַַַַַָָָָָָָָָoֱֱֱֱֱֶֶֶֶֶֶֶַַַַַַָָָָָlֱֱֱֱֶֶֶֶֶֶַַַַָָָָָlֱֱֱֱֶֶֶֶֶֶַַַַָָָָָeֱֱֱֶֶֶֶַַַָָָHֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֳֳֳֳֳֳֳֳֳֳֳֳֳֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַַַַַַַַַַַַַַָָָָָָָָָָָָָָ` outputs the same thing. Remember, non-Niqqud characters are ignored.

The code ` ְֱֱֱֱֱֱֱֱֱֱֱֱֲֳִִֵֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַָָָָָָָָָָָָֺֺֺֹֻֻ` (62 bytes) outputs `2 3 5 8 13 21 34`, and can be changed to support arbitrarely large Fibonnaci numbers.

The code ` ְְְְְְְְְְְְְְְְְְֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֱֲֲִִִִֵֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶֶַַַַַַַַַַַַַַַַַַַַַַַָֹֺֺֹֻֻּ`  (99 bytes) takes a number as input at calculates its factorial.

## Supported operations

{{{OPERATIONS}}}

