import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiLocalService {
  readonly apiUrl: string = environment.LOCAL_API;

  constructor(private http: HttpClient) {}

  public getInfo(info: string): Observable<any> {
    return this.http.get(this.apiUrl + info);
  }

  // public registraVoto(id: number, voto) {
  //   return this.http.put(this.apiUrl + 'restaurantes/' + id, voto)
  // }
}
