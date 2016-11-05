import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import * as io from 'socket.io-client';

@Injectable()
export class SocketService {

  private socketClient:SocketIOClient.Socket;

  //private subject;

  private connectionObservable:Observable<any>;
  private messageObservable:Observable<any>;
  private countObservable:Observable<any>;

  private  url = "http://localhost:3000";


  constructor() {
    this.socketClient = io(this.url);
    //this.subject = new Subject();
    this.init();
  }


  private init(){

    this.connectionObservable = new Observable(observer => {

     this.socketClient.on('connection', (data) => {
        console.log('connection',data);
        observer.next(data);
      });
    });

  this.messageObservable = new Observable(observer => {
    this.socketClient.on('message', (data) => {
        console.log('message',data);
        observer.next(data);
      });
  });

    this.countObservable = new Observable(observer => {
      this.socketClient.on('count', (data) => {
        console.log('count',data);
        observer.next(data);
      });
    });

    //this.connectionObservable.subscribe(this.subject);
    //this.messageObservable.subscribe(this.subject);
    //this.countObservable.subscribe(this.subject);

  }

  public Connected():Observable<any>{
    return this.connectionObservable;
    //return this.subject;
  }

  public Counter():Observable<any>{
    return this.countObservable;
    //return this.subject;
  }

  public Messenger():Observable<any>{
    return this.messageObservable;
    //return this.subject;
  }


  public sendMessage(message:string):void{
    this.socketClient.emit('new-message', message);
  }


}
