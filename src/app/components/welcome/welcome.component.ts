import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  @Output() showLogin = new EventEmitter<string>();
  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  clickLogin() {
this.showLogin.emit('login')
  }
  clickSingup(){
    this.showLogin.emit('singup')
  }
}
