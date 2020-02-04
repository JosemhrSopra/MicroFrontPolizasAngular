import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PolizaListRestOut } from '../model/polizaList-rest-out';
import { PolizaRestOut } from '../model/poliza-rest-out';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PolizaService {

  private typeCall = 'JPA'; // JPA - MyBatis

  private polizaFindAllUrl: string;
  private polizaFindOneUrl: string;
 
  constructor(private http: HttpClient) {
    this.polizaFindAllUrl = 'http://localhost:8080/poliza' + this.typeCall + '/getPolizas';
    this.polizaFindOneUrl = 'http://localhost:8080/poliza' + this.typeCall + '/getPoliza/1';
  }
 
  public findAll(): Observable<PolizaListRestOut> {
    return this.http.get<PolizaListRestOut>(this.polizaFindAllUrl);
  }

  public findOne(): Observable<PolizaRestOut> {
    return this.http.get<PolizaRestOut>(this.polizaFindOneUrl);
  }
}
