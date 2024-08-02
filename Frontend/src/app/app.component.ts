import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'insurance-detection-app-frontend';
  collapsed = signal(false)
  sidenavWidth = computed(() => this.collapsed() ? '65px': '250px');
}
