import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showTaskForm: boolean = false;
  subscription: Subscription;

  constructor(private layoutService: LayoutService, private router: Router) {
    this.subscription = this.layoutService
      .onToggle()
      .subscribe((value) => (this.showTaskForm = value));
  }

  toggle() {
    this.layoutService.toggleShowTaskForm();
  }

  hasRoute(routes: string[]) {
    return routes.includes(this.router.url);
  }
}
