import { Component } from '@angular/core';
import {SocketService} from "../services/socket.service";


@Component({
  moduleId: module.id,
  selector: 'widget-two',
  templateUrl: 'widget-two.component.html',
  styleUrls: ['widget-two.component.css']
})
export class WidgetTwoComponent {

  private value:number = 0;

  constructor(private socketService:SocketService){
    socketService.Messenger().subscribe((data)=> {
      this.value = data;
    });
  }

}
