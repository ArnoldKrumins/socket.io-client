import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  constructor() {}


  run():void{

    var socket = io('http://localhost:3000');
    socket.on('connection', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });

  }

}
