import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Location, PopStateEvent } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  private lastPoppedUrl: string;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private location: Location){}

  ngOnInit(){
    this.location.subscribe((evt:PopStateEvent) => {
      this.lastPoppedUrl = evt.url;
    });

    // scroll to top when route change to another page
    this.router.events.subscribe((evt) => {
      if(evt instanceof NavigationEnd) {
        if(evt.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
        } else {
          window.scrollTo(0,0);
        }
      }
    });
  }
}
