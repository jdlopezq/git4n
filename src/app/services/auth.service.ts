import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
/**
   * @description Variable que contiene el observable con los doatos del
   * usuario una vez este esta loggeado .
   */
  user: Observable<any>;


  constructor(private firebaseAuth: AngularFireAuth) {
    this.user = firebaseAuth.authState;
  }
/**
   * @description Método que envía información a la API para crear
   * el usuarion en firebase.
   * @param email string para ser enviado en la petición
   * @param password string para ser enviado en la petición  
   * @method saveUserData
   */
  signup(email: string, password: string) {
    return this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Success!', value);
        return true
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
        return false
      });
  }
/**
   * @description Método que envía información a la API de firebase pera iniciar sesion.
   * @param email string para ser enviado en la petición
   * @param password string para ser enviado en la petición  
   * @method saveUserData
   */
  login(email: string, password: string) {
 return this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
      
        console.log(value);
     
      })
      .catch(err => {
        alert(err.message)
        console.log('Something went wrong:',err.message);
      });
  }
/**
   * @description Método para cerrar la sesion de usuarion firebase.
   * @method logout
   */
  logout() {
    this.firebaseAuth.signOut();
  }
}
