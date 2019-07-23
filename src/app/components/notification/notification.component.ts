import { Component, Input } from '@angular/core';
import { Icons } from '../icon/icons.enum';

@Component({
  selector: 'relias-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent {

  @Input() message: string;
  @Input() icon: string;
  iconName: string;

  constructor() {}

  ngOnChanges() {
    if (this.icon === 'error') {
      this.iconName = Icons.notificationError;
    } else if (this.icon === 'success') {
      this.iconName = Icons.notificationSuccess;
    } else {
      this.icon = 'general'; // just in case they pass in something else
      this.iconName = Icons.notificationGeneral;
    }
  }
}
