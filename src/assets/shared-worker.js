onconnect = (e) => {
  const port = e.ports[0];

  port.addEventListener('message', (e) => {
    port.postMessage(e.data);
  });

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
}
