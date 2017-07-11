import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shouldStick = false;
  constructor(zone: NgZone) {
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset>200) {
          this.shouldStick=true;
        } else {
          this.shouldStick=false;
        }
      });
    }
   }

  ngOnInit() {

  }

}
