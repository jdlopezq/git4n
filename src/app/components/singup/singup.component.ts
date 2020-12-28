import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {

  @Output() showWelcome = new EventEmitter<string>();
  singupForm:FormGroup
  
  constructor(private fb:FormBuilder,
    public _authService: AuthService,
    private _router:Router) { 
    this.singupForm=this.fb.group({
      username:['', [Validators.required]],
      password:['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  login() {
    this._authService.signup(this.singupForm.value.username, this.singupForm.value.password).then(succes=>{
      this._router.navigate(['home'])
      this.cancel()
    })
  }

  cancel(){
    this.showWelcome.emit('welcome')
  }

}
