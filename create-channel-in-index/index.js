const iframe = document.getElementById("iframe");
const channel = new MessageChannel();

iframe.addEventListener("load", () => {
  iframe.contentWindow.postMessage(null, "*", [channel.port2]);
});
const port = channel.port1;

port.postMessage("from index");
port.onmessage = e => {
  console.log(e.data);
};
