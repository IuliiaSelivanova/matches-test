export const socket = new WebSocket(
  "wss://app.ftoyd.com/fronttemp-service/ws",
);

socket.onmessage = function (e) {
  console.log(`[message]`);
  console.log(`${e.data}`);
};
