import { Equal, Expect } from '../helpers/type-utils';

/**
 * How do we type onFocusChange?
 */

type FocusListener  =(isFocused: boolean) =>void
const addListener = (onFocusChange: FocusListener) => {
  window.addEventListener('focus', () => {
    onFocusChange(true);
  });

  window.addEventListener('blur', () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});


// type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
// };
// function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + ' returned ' + fn(6));
// }

// function myFunc(someArg: number) {
//   return someArg > 3;
// }
// myFunc.description = 'default description';

// doSomething(myFunc);