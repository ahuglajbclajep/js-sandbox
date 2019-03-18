const input = document.getElementById("input");
const add = document.getElementById("button");
const counter = document.getElementById("counter");

if (window.SharedWorker) {
  const worker = new SharedWorker("worker.js");

  add.onclick = () => {
    worker.port.postMessage(+input.value);
  };

  worker.port.onmessage = e => {
    counter.textContent = e.data;
  };
}
