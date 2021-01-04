import { Component, ViewChild, Renderer2, ElementRef, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @ViewChild('navHeader') nav: ElementRef;
  classScroll = 'sticky-navbar-helados-transparent';
  constructor(){
  }

  ngOnInit(): void {
    fromEvent(window, 'scroll').subscribe(
      (e: Event) => {
        if (window.pageYOffset > 160){
            this.classScroll = 'sticky-navbar-helados-blanco';
        } else {
          this.classScroll = 'sticky-navbar-helados-transparent';
        }
      }
      );
  }

}


