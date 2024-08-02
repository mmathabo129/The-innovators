import { Component, Input, signal } from '@angular/core';
import { MenuItems } from './menu-items';

@Component({
  selector: 'app-custom-side-nav',
  templateUrl: './custom-side-nav.component.html',
  styleUrls: ['./custom-side-nav.component.css']
})
export class CustomSideNavComponent {
  sideNavCollapsed = signal(false);
  @Input() set collapsed(val: boolean){
    this.sideNavCollapsed.set(val)
  }
  menuItems  = signal<MenuItems[]>([
    {
      icon: 'dashboard',
      label: 'Dashboard',
      route: ''
    },

    // {
    //   icon: 'upload',
    //   label: 'Upload all claims',
    //   route: 'chat'
    // },

    // {
    //   icon: 'folder',
    //   label: 'View all Claims',
    //   route: 'claims'
    // },
    // {
    //   icon: 'warning',
    //   label: 'Flagged claims',
    //   route: 'flagged'
    // },
    // {
    //   icon: 'update',
    //   label: 'Under Investigation',
    //   route: 'status'
    // },
    {
      icon: 'chat',
      label: 'Chat with Fraud detector',
      route: 'chat'
    }

  ]);

}
