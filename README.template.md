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

{{{OPERATIONS}}}

