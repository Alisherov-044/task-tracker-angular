import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  task = {
    id: 1,
    text: 'task 1',
    day: '26th september',
    reminder: true,
  };
}
