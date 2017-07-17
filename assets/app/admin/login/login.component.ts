import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdminService } from '../../shared/admin.service';

@Component({
  selector: 'app-longin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private adminService: AdminService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onLogin() {
    this.adminService.logIn();
    console.log(this.adminService.loggedIn);
    this.router.navigate(['../new-blog'], {relativeTo:this.route});
  }

}
