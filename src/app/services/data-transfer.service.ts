import { Injectable, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
  
public shareUserInfo = new BehaviorSubject<any>(null)
currentData = this.shareUserInfo.asObservable()

  constructor(private cookieService: CookieService) { }

/**
   * @description Método que guarda la informacion del usuario 
   * registrado en lo scookies.
   * @param key string asociado al elemento a ser almacenado.
   * @param value valor para se almacenado.  
   * @method saveUserData
   */
saveUserData(key:string, value:any){
  if ( typeof value =='string') {
    this.cookieService.set(key, value,2, '/')
  }else if ( typeof value =='object'){
    this.cookieService.set(key, JSON.stringify(value),2, '/')
  }
}
/**
   * @description Método que extrae los cookies de la pagina y entrega 
   * una lista de objetos. 
   * @method getAllUsers
   */
getAllUsers(){
 return this.cookieService.getAll()
}
/**
   * @description Método que obtiene un cookies especifico de la memoria.
   * @param key string para obtener informacionde las cookies 
   * @method getUserInfo
   */
getUserInfo(key:string){
  return JSON.parse(this.cookieService.get(key)) 
}
/**
   * @description Método que envía información entres los diferentes
   * componentes 
   * @param info objeto que se envia entre componentes.
   * @method userIsSet
   */
userIsSet(info:any){
  this.shareUserInfo.next(info)
}
/**
   * @description Método para elminiar un cookie especifico
   * con un allave valor.
   * @param key string para borrar un cookie especifico 
   * @method deleteUserInfo
   */
deleteUserInfo(key:string){
  this.cookieService.delete(key, "/")
}
/**
   * @description Método que elimina los cookies almacenados.
   * @method deleteUsersInfo
   */
deleteUsersInfo(){
  this.cookieService.deleteAll( '/ ',  '/' )
  location.reload()
}

}

