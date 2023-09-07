import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  const msg = await fetch('foo', true);
  console.log(elapsed(), 'throwOnce:', msg);
}

async function throwSeveral() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.
  let msg = await fetch('foo1', true);
  console.log(elapsed(), 'throwSeveral1:', msg);
  msg = await fetch('foo2', true);
  console.log(elapsed(), 'throwSeveral2:', msg);
  msg = fetch('foo3', true);
  console.log(elapsed(), 'throwSeveral3:', msg);
}

async function throwChained() {
  const msg1 = await fetch('foo-chain', true);
  console.log(elapsed(), 'throwChained1:', msg1);
  const msg2 = await fetch(msg1, true);
  console.log(elapsed(), 'throwChained2:', msg2);
  const msg3 = await fetch(msg2, true);
  console.log(elapsed(), 'throwChained3:', msg3);
}

try {
  await throwChained(await throwSeveral(await throwOnce()));
} catch (error) {
  console.log(elapsed(), 'throw Error:', error.message);
}
