import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  
  /**
  * @description Variable que contiene la direccion de la api a consultar.
  */
  private apiUrl = 'https://api.github.com/'

  constructor(private _http: HttpClient) { }


  /**
   * @description Método que envía información a la API para obtener
   *              la informacion completa del usuario en github.
   * @param user string para ser enviado en la petición 
   * @method getUserInfo
   */

  getUserInfo(user: string) {
    return this._http.get(`${this.apiUrl}users/${user}`).pipe(map((data: any) => {
      return data
    }))
  }

  /**
   * @description Método que envía información a la API para obtener
   *              los repositorios del usuario.
   * @param user string para ser enviado en la petición 
   * @method getUserRepos
   */
  
  getUserRepos(user: string) {
    return this._http.get(`${this.apiUrl}users/${user}/repos`).pipe(map((data: any) => {
      return data
    }))
  }


}
