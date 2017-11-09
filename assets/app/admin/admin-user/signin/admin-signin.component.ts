import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AdminService } from '../../admin.service';

import { AdminUser } from '../../../models/admin-user';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
  adminUser: FormGroup;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.adminUser = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', Validators.required]
    });
  }

  onSignin({ value, valid }: { value: AdminUser, valid: boolean }) {
    if(valid) {
      value.password
      this.adminService.signIp(value)
        .subscribe(data => {
          localStorage.setItem('token', data.token);
        });
    }
  }
}