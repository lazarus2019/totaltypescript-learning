import { expect, it } from 'vitest';

const tryCatchDemo = (state: 'fail' | 'succeed') => {
  try {
    if (state === 'fail') {
      throw new Error('Failure!');
    }
  } catch (e) {
    // can except for unknown value
    // return (e as Error).message; // not the good way cause the above try state can throw anything

    // better way
    if(e instanceof Error){
      return e.message
    }

    // fall down any errors that not Error constructor
  }
};

it('Should return the message when it fails', () => {
  expect(tryCatchDemo('fail')).toEqual('Failure!');
});
