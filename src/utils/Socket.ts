import WebSocket, { Server } from "ws";

class Socket {
  socket: Server | undefined;
  constructor() {}

  async getConnection() {
    try {
      this.socket = new WebSocket.Server({
        port: Number(process.env.WS_PORT) ?? 8080,
      });
      console.log(`🚀 WS Connect Success. ✅`);
    } catch (error) {
      console.log(`🚀 WS Connect Error. ❌`);
    }
    
  }

  async getSubscribe() {
    this.socket!.on("connection", (ws, req) => {
      ws.on("message", (msg) => {
        console.log(msg.toString());
      });
    });
  }
}

export default Socket;