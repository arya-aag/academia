# Regular Expressions

## Table of Contents

* [JavaScript](#javascript)
* [Pattern Syntax](#pattern-syntax)

### JavaScript

Reference:

* [JavaScript Regular Expressions](https://medium.freecodecamp.org/a-quick-and-simple-guide-to-javascript-regular-expressions-48b46a68df29)

#### Regex Definition

Two ways to do it:

* `const re1 = new RegExp('hey')`

* `const re1 = /hey/`

Here `hey` is called the *pattern*. And to test a Regex pattern we use the following which returns a boolean: `re1.test('hey')`

#### Pattern Syntax

| Pattern | Meaning                  | Example |
| ---- | --------------------- | -- |
| hey  | **simple regex**: normal substring match | |
| ^hey | **anchoring**: match strings that start with hey | |
| hey$ | **anchoring**: match strings that end with hey | |
| .* | **wildcard**: matches any character repeated 0 or more times | |
| [a-z] | **ranges**: a, b, c, ... , x, y, z | /[a-z]/.test('a') //true /[a-z]/.test('1') //false  |
| [A-Z] | **ranges**: A, B, C, ... , X, Y, Z |  |
| [a-c] | **ranges**: a, b, c |  |
| [0-9] | **ranges**: 0, 1, 2, 3, ... , 8, 9 |  |
| [A-Za-z0-9] | **combined range**: combination of above ranges (works on only one character) | /[A-Za-z0-9]/.test('A') //true /[A-Za-z0-9]/.test('Ab') //false |
