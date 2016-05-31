import { Component } from '@angular/core';
import {SocketService} from "./services/socket.service";
import {SigninComponent} from "./components/signin/signin.component";

@Component({
  moduleId: module.id,
  directives:[SigninComponent],
  providers:[SocketService],
  selector: 'client-app',
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css']
})
export class ClientAppComponent {

  title = 'client works!';

  constructor(private socketService:SocketService){
    socketService.run();
  }


}
