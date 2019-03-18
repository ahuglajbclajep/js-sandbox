let count = 0;
onconnect = e => {
  const port = e.ports[0];

  port.onmessage = e => {
    count += e.data;
    port.postMessage(count);
  };
};
