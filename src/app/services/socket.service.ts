import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private socketClient:SocketIOClient.Socket;

  constructor() {
    this.init();
  }

  init():void{

    this.socketClient = io('http://localhost:3000');
    this.socketClient.on('connection', function (data) {
      console.log(data);
      this.socketClient.emit('my other event', { my: 'data' });
    });

  }


  run():void{



  }

}
