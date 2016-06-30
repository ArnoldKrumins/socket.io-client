import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private socketClient:SocketIOClient.Socket;

  private connectionObservable:Observable<any>;

  private  url = "http://localhost:3000";


  constructor() {
    this.socketClient = io(this.url);
    this.init();
  }


  private init(){

    this.connectionObservable = new Observable(observer => {

      this.socketClient.on('connection', (data) => {
        observer.next(data);
      });

      this.socketClient.on('message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socketClient.disconnect();
      };

    })
  }

  public communicate():Observable<any>{
    return this.connectionObservable;
  }

  public sendMessage(message:string):void{
    this.socketClient.emit('new-message', message);
  }


}
