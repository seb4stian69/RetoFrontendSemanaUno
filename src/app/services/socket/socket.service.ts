// + ---------------------------- + First level imports + ----------------------------- + //
import { Injectable } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
// + ---------------------------- + Thirds level imports + ---------------------------- + //
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';


@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket!: WebSocketSubject<unknown>;

  constructor() {/*void*/}

  conection(id: string) {
    return webSocket(`ws://localhost:8082/retrieve/${id}`);
  }

  close(){
    this.socket.unsubscribe();
  }

}
