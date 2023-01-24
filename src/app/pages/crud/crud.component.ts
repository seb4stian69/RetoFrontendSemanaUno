// + ---------------------------- + First level imports + ----------------------------- + //
import { Component, OnInit } from '@angular/core';
// + ---------------------------- + Second level imports + ---------------------------- + //
import { SocketService } from './../../services/socket/socket.service';
import { ProductsResponse } from './../../common/models/ProductsResponse.model';
import { CrudService } from './../../services/crud/crud.service';
// + ---------------------------- + Thirds level imports + ---------------------------- + //

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
