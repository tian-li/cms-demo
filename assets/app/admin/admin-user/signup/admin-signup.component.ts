import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AdminService } from '../../admin.service';

import { AdminUser } from '../../../models/admin-user';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent implements OnInit {
  adminUser: FormGroup;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.adminUser = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSignup({ value, valid }: { value: AdminUser, valid: boolean }) {
    if (valid) {
      value.password
      this.adminService.signUp(value)
        .subscribe(data => {
          localStorage.setItem('token', data.token);
        });
    }
  }
}