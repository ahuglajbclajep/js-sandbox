addEventListener("message", e => {
  const port = e.ports[0];

  port.postMessage("from iframe");
  port.onmessage = e => {
    console.log(e.data);
  };
});
