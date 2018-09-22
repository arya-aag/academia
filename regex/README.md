# Regular Expressions

## Table of Contents

- [JavaScript](#javascript)
  - [Definition](#regex-definition)
  - [Pattern Syntax](#pattern-syntax)

### JavaScript

Reference:

- [JavaScript Regular Expressions](https://medium.freecodecamp.org/a-quick-and-simple-guide-to-javascript-regular-expressions-48b46a68df29)

#### Regex Definition

Two ways to do it:

- `const re1 = new RegExp('hey')`

- `const re1 = /hey/`

Here `hey` is called the _pattern_. And to test a Regex pattern we use the following which returns a boolean: `re1.test('hey')`

#### Pattern Syntax

| Pattern       | Meaning                                                                                            |
| ------------- | -------------------------------------------------------------------------------------------------- |
| hey           | **simple regex**: normal substring match                                                           |
| ^hey          | **anchoring**: match strings that start with hey                                                   |
| hey$          | **anchoring**: match strings that end with hey                                                     |
| .\*           | **wildcard**: matches any character repeated 0 or more times                                       |
| [a-z]         | **ranges**: a, b, c, ... , x, y, z                                                                 |
| [A-Z]         | **ranges**: A, B, C, ... , X, Y, Z                                                                 |
| [a-c]         | **ranges**: a, b, c                                                                                |
| [0-9]         | **ranges**: 0, 1, 2, 3, ... , 8, 9                                                                 |
| [A-Za-z0-9]   | **combined range**: combination of above ranges (works on only one character)                      |
| ^[A-Za-z0-9]$ | string contains only 1 char from within this range                                                 |
| [^a-za-z0-9]  | **negation**: it negates the range it is used with                                                 |
| \d            | any digit, equivalent to [0-9]                                                                     |
| \D            | any character that’s not a digit, equivalent to [^0-9]                                             |
| \w            | any alphanumeric character, equivalent to [A-Za-z0-9]                                              |
| \W            | any non-alphanumeric character, equivalent to [^a-za-z0-9]                                         |
| \s            | any whitespace character: spaces, tabs, newlines and Unicode spaces                                |
| \S            | any character that’s not a whitespace                                                              |
| \0            | null                                                                                               |
| \n            | a newline character                                                                                |
| \t            | a tab character                                                                                    |
| \uXXXX        | a unicode character with code XXXX (requires the u flag)                                           |
| .             | any character that is not a newline char (e.g. \n) (unless you use the s flag, explained later on) |
| [^]           | any character, including newline characters. It’s useful on multiline strings.                     |
| hey&#124;ho   | search one string or the other                                                                     |
| ^\d$          | for when we want to search for a single character                                                  |
| ^\d?$         | the **?** here makes the char optional (meaning either match one or none)                          |
