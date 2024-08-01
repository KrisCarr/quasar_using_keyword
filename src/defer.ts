export function defer(fn: () => void) {
  return {
    [Symbol.dispose]: () => fn(),
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
using _g = defer(() => {
  console.log('done');
});
