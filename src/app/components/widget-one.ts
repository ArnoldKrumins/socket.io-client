import { Component } from '@angular/core';
import {SocketService} from "../services/socket.service";


@Component({
  moduleId: module.id,
  providers:[SocketService],
  selector: 'widget-one',
  templateUrl: 'widget-one.component.html',
  styleUrls: ['widget-one.component.css']
})
export class WidgetOneComponent {

  private value:number = 0;

  constructor(private socketService:SocketService){
    socketService.Counter().subscribe((data)=> {
      this.value = data;
    });
  }

}
