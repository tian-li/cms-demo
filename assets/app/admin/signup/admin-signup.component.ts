import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-sign.component.html',
  styleUrls: ['./admin-sign.component.css']
})
export class AdminSignupComponent implements OnInit {

  constructor(private adminService: AdminService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onSignup() {
    this.adminService.logIn();
    console.log(this.adminService.loggedIn);
    this.router.navigate(['../new-blog'], {relativeTo:this.route});
  }

}
