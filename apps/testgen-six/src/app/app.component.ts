import { Component } from '@angular/core';

@Component({
  selector: 'testgen-six-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-six';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
