import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DataTransferService } from 'src/app/services/data-transfer.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
   /**
   * @description Variable que almacena el formulario de registro.
   */
  public registerForm: FormGroup
     /**
   * @description Variable que almacena la fecha actual.
   */
  public today = new Date();

  constructor(private fb: FormBuilder, 
    private _dataTransfer: DataTransferService,
    private _router:Router) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      document: ['', [Validators.required, Validators.maxLength(15)]],
      birthdate: ['', [Validators.required]],
      mail: ['', [Validators.required]],
      guser: ['', [Validators.required]]
    })
   
  }

  ngOnInit(): void {
  }
   /**
   * @description Método para registrar nuevos usuarion 
   * y consultar sus repos.
   * @method registerUser
   */
 registerUser(){
  this._dataTransfer.saveUserData( this.registerForm.value.document, this.registerForm.value);
  this._dataTransfer.userIsSet(this.registerForm.value.document)
  this._router.navigate(['table'])
 }
}
