import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Notification} from 'src/app/shared/model/Notification.model'


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = environment.APP_BASE_URL + environment.VERSION_ONE
  constructor(private httpClient:HttpClient) { }

  getAllNotifications():Observable<Notification[]>{
    return this.httpClient.get<Notification[]>(this.baseUrl + '/notification')
  }
}
