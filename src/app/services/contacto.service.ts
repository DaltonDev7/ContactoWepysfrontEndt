import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(
    private http :  HttpClient
  ) { }

  getAll(){
    return this.http.get(`${environment.ContactoApi}/Contacto`)
  }

  saveContacto(payload:any){
    return this.http.post(`${environment.ContactoApi}/Contacto`, payload)
  }

}
