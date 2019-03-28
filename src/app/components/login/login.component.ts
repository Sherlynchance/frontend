import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../_services';
import { AlertService } from 'src/app/_services/alert.service';
import { User, Role } from 'src/app/_models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    currentUser: User;

    constructor(
        private formBuilder: FormBuilder, // defines the form controls and validators, and is used to access data entered into the form
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {

        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            window.alert("You are already logged in!") 
            this.router.navigate(['/home']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        
        this.loading = true;
        this.authenticationService.login(this.f.email.value, this.f.password.value)
            .subscribe(data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }

    // get isAdmin(){
    //     return this.currentUser && this.currentUser.user_roles == Role.Admin;
    
    //   }
}