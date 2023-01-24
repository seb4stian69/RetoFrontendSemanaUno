// + ---------------------------- + First level imports + ----------------------------- + //
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
// + ---------------------------- + Second level imports + ---------------------------- + //
// + ---------------------------- + Thirds level imports + ---------------------------- + //


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title:string = "Reto frontend semana uno"
  constructor(private router: Router){}
  ngOnInit():void{/*this.router.navigate(['/login']);*/}
}
