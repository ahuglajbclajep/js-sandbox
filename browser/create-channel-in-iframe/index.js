addEventListener("message", e => {
  const port = e.ports[0];

  port.postMessage("from index");
  port.onmessage = e => {
    console.log(e.data);
  };
});
