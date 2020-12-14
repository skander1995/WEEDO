import {Injectable} from '@angular/core';
import {io} from "socket.io-client";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket;

  constructor(private http: HttpClient ) {
  }

  initConnection() {
    this.socket = io(environment.SOCKET_URL, {});
  }

  public sendMessage(message: any) {
    this.socket.emit('message', message);
  }

  public getMessages = () => {
    return Observable.create((observer) => {
      this.socket.on('FromAPI', (message) => {
        observer.next(message);
      });
    });
  }

  public sendMessagetoBackend(msg:any)
  {

    console.log("sending: "+msg+" to /api/weedo/:msg")
    return this.http.get(environment.SOCKET_URL+'/api/weedo/'+msg)
  }
}
