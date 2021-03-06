import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService, UserService } from 'src/app/_services';
import { AlertService } from 'src/app/_services/alert.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertService: AlertService ) {
      
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
      this.router.navigate(['/home']);
    }

  }

  // make sure all data is inputed by the user from the form and set validations
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      user_username: ['', Validators.required],
      email: ['', Validators.required],
      user_roles: ['user', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // alert the user if registration successfull, else show error
    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(first())
        .subscribe(
          data => {
            this.alertService.success('Registration successful', true);
            window.alert("Registration successfull")
            this.router.navigate(['/login']);
          },
          error => {
            this.alertService.error(error);
            this.loading = false;
          });
  }

}
