import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly BASE_URL = environment.APP_BASE_URL + environment.VERSION_ONE + '/user/'

  constructor(private httpClient:HttpClient) { }



  public getUserToken(username:string,password:string):Observable<any>{
    return this.httpClient.post<any>(this.BASE_URL + 'authenticate',{
      'userName':username,
      'password':password
    }).pipe(map(res=>res.jsonToken))
  }
}
