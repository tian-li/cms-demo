import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-index-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  shouldStick = false;
  
  constructor(zone: NgZone,
    private route:ActivatedRoute
    ) {
    window.onscroll = () => {
      zone.run(() => {
        if(window.pageYOffset>500) {
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
