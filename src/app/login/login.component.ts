import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../authservice";

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  form:FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router) {

    this.form = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    })

  }

  login() {
    const val = this.form.value;

    if (val.name && val.password) {
      this.authService.login(val.name, val.password)
        .subscribe(
          () => {
            console.log("User is logged in");
            this.router.navigateByUrl('/');
          }
        );
    }

  }

}
