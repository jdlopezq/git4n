import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() showWelcome = new EventEmitter<string>();
  loginForm:FormGroup
  
  constructor(private fb:FormBuilder,
    public _authService: AuthService,
    private _router:Router) { 
    this.loginForm=this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  login() {
    this._authService.login(this.loginForm.value.username, this.loginForm.value.password).then(succes=>{
      this._router.navigate(['register'])
    })
  }

  cancel(){
    this.showWelcome.emit('welcome')
  }

}
