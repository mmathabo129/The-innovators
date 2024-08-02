import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  collapsed = signal(false)
  sidenavWidth = computed(() => this.collapsed() ? '65px': '250px');
}
