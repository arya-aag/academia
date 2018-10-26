# API Design

## Table of Contents

- [Reference](#reference)
- [Error handling](#error-handling)
- [Session management](#session-management)
- [HTTP Status Codes](#http-status-codes)

### Reference

### Custom Validators

**Method 1**: Export an _initializer_ function that will return the actual validator. Used this to create a generic method that returns actual validator depending on input parms.

```typescript
export function onlyAllowThis(letter: string): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value !== letter) {
      return { NOT_THIS: `This is not ${letter}!` };
    }
  };
}
```

**Method 1**: Export the validator directly

```typescript
export const onlyAllowA = (control: AbstractControl): { [key: string]: any } | null => {
  if (control.value !== 'A') {
    return { NOT_A: 'This is not A!' };
  }
};
```

Stackblitz example: [here](https://stackblitz.com/edit/angular-custom-validator-example)
