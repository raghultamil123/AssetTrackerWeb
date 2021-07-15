import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/service/notification.service';
import { Notification } from 'src/app/shared/model/Notification.model'

@Component({
  selector: 'app-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit {

  constructor(private notificationService:NotificationService) { }

  notifications:Notification[] = []

  ngOnInit(): void {
    this.getAllNotifications()
  }

  getAllNotifications(){
      this.notificationService.getAllNotifications().subscribe(
        (res)=>{
          this.notifications = res
        }
      )
  }

}
