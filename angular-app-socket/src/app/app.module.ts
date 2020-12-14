import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import {FormsModule} from "@angular/forms";
import {ChatService} from "./chat.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({

  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
