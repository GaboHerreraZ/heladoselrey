import { Component } from '@angular/core';
import {  NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'base-app';

  constructor(private router: Router) {
      const navEndEvents$ = this.router.events.pipe(
        filter(e => e instanceof NavigationEnd)
      );

      navEndEvents$.subscribe((event: NavigationEnd) => {
          gtag('config', 'G-LLKL7MMNY5', {
            page_path: event.urlAfterRedirects
          });
       });
  }

}
