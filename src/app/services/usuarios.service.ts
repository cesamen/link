import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuarios } from '../models/usuarios';
import { HttpClient } from '@angular/common/http';
import { Links } from '../models/links';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private baseEndPoint = 'https://private-anon-628d7b7a24-henrybravo.apiary-mock.com';

  constructor(private http: HttpClient) { }

  public crearUsuario(usuario: Usuarios): Observable<Usuarios> {
    return this.http.post<Usuarios>(this.baseEndPoint+"/register",usuario);
  }

  public consultarUsuario(email: string, password: string): Observable<string> {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    return this.http.post<string>(this.baseEndPoint+'/login', formData);
  }

  public traerDatos(id: number): Observable<Usuarios> {
    return this.http.get<Usuarios>(`${this.baseEndPoint}/user/${id}`);
  }

  public traerLinks(): Observable<Links[]> {
    return this.http.get<Links[]>(`${this.baseEndPoint}/links`);
  }

  public eliminarLink(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndPoint}/links/${id}`);
  }

  public creaLink(link: Links): Observable<Links> {
    return this.http.post<Links>(this.baseEndPoint+"/links",link);
  }
}
