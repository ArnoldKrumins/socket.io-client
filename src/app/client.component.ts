import { Component } from '@angular/core';
import {SocketService} from "./services/socket.service";
import {WidgetOneComponent} from "./components/widget-one";
import {WidgetTwoComponent} from "./components/widget-two";

@Component({
  moduleId: module.id,
  providers:[SocketService],
  directives:[WidgetOneComponent,WidgetTwoComponent],
  selector: 'client-app',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientAppComponent {



  constructor(private socketService:SocketService){
    socketService.Connected().subscribe((data)=> {
      console.log(data);
    });
  }

  send(message:string){
    this.socketService.sendMessage(message);
  }

}
