import {Component, OnInit} from '@angular/core';
import {ChatService} from "./chat.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-app-socket';
  newMessage: string;
  messageList: string[] = [];
  constructor(private chatService: ChatService ) {}

  ngOnInit () {
    this.chatService.initConnection();
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messageList.push(message);
      });
  }
  sendMessage() {
    this.chatService.sendMessagetoBackend(this.newMessage).subscribe(result=>console.log(result));
    this.newMessage = '';
  }


}
