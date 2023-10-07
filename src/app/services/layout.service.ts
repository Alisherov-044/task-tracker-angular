import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private showTaskForm: boolean = false;
  private subject = new Subject<any>();

  constructor() {}

  toggleShowTaskForm(): void {
    this.showTaskForm = !this.showTaskForm;
    this.subject.next(this.showTaskForm);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
