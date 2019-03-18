const start = script => {
  const worker = `importScripts('${document.location}lib.js');
const worker = ${script};
worker(self);`;
  const blob = new Blob([worker]);
  return new Worker(URL.createObjectURL(blob));
};

const send = (port, value) => port.postMessage(value);

const recv = port =>
  new Promise(resolve => (port.onmessage = e => resolve(e.data)));
