import { Component } from '@angular/core';
import {SocketService} from "./services/socket.service";
import {WidgetOneComponent} from "./components/widget-one";

@Component({
  moduleId: module.id,
  providers:[SocketService],
  directives:[WidgetOneComponent],
  selector: 'client-app',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientAppComponent {

  title = 'client works!';

  constructor(private socketService:SocketService){
    socketService.Connected().subscribe((data)=> {
      console.log(data);
    });
  }

  send(message:string){
    this.socketService.sendMessage(message);
  }

}
