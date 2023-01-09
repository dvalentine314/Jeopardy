const browserInstances = [];

onconnect = (connection) => {
  const port = connection.ports[0];

  browserInstances.push(port);

  port.onmessage = function(event) {

    // post message back out to your application
    browserInstances.forEach(instance => {
      instance.postMessage(event.data);
    });
  }

  port.start(); // Required when using addEventListener. Otherwise called implicitly by onmessage setter.
}
