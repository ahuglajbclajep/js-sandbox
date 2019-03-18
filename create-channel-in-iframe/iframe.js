const channel = new MessageChannel();

window.parent.postMessage(null, "*", [channel.port2]);
const port = channel.port1;

port.postMessage("from iframe");
port.onmessage = e => {
  console.log(e.data);
};
