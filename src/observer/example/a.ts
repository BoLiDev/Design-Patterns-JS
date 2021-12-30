const subscribers = [];

export function subscribe(foo) {
  subscribers.push(foo);
}

async function A() {
  const data = await fetchData();
  subscribers.forEach((subscriber) => subscriber(data));
}

A();

/**library */
async function fetchData() {
  return 'Data';
}