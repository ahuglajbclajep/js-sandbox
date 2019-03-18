const worker = async p => {
  const a = await recv(p);
  const b = await recv(p);
  send(p, a + b);
};

(async () => {
  const p = start(worker);
  send(p, 42);
  send(p, 42);
  const v = await recv(p);
  console.log(v);
})();
