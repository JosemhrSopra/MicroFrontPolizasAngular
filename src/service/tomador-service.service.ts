import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tomador } from '../model/Tomador';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TomadorService {

  private typeCall = 'JPA'; // JPA - MyBatis

  private tomadorFindOneUrl: string;
 
  constructor(private http: HttpClient) {
    this.tomadorFindOneUrl = 'http://localhost:8080/poliza' + this.typeCall + '/getTomadorByIdPoliza/1';
  }
 
  public findOne(): Observable<Tomador> {
    return this.http.get<Tomador>(this.tomadorFindOneUrl);
  }

}