import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Observable } from 'rxjs';
import SecureStorage from 'secure-web-storage';
import { UsuarioModel } from '../models/UsuarioModel';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const SECRET_KEY = '@LOgS3cr3T#-2021';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public secureStorage = new SecureStorage(localStorage, {
    hash: function hash(key) {
      key = CryptoJS.SHA256(key, SECRET_KEY);
 
      return key.toString();
    },
    encrypt: function encrypt(data) {
      data = CryptoJS.AES.encrypt(data, SECRET_KEY);
      data = data.toString();
      
      return data;
    },
    decrypt: function decrypt(data) {
      data = CryptoJS.AES.decrypt(data, SECRET_KEY);
 
      data = data.toString(CryptoJS.enc.Utf8);
 
      return data;
    }
  });

  public validarSesion(usuario: UsuarioModel): Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${ this.baseUrl }/inicio-sesion/web`, usuario);
  }
}
