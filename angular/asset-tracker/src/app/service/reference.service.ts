import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Reference } from '../shared/model/Reference.model';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  private appBaseURL = environment.APP_BASE_URL + environment.VERSION_ONE;

  constructor(private httpClient:HttpClient) { }


  getReferenceValue(key:string):Observable<Reference[]>{
    return this.httpClient.get<Reference[]>(this.appBaseURL+"/refterm",{
      params:{
        "key":key
      }
    })
  }
}
