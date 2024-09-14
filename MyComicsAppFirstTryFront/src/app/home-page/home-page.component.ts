import { Component } from '@angular/core';
import { ComicService } from '../Services/comic.service';
import { Comic } from '../Shared/Models/Comic';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../Shared/Models/User';
import { UserService } from '../Services/user.service';
import { HttpResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  userToSend: User = {};
;

  myReactiveForm = this.formBuilder.group({
    Email: ['', [Validators.required]],
    Password: [''],
  })

  constructor(private formBuilder: FormBuilder,
    private userService: UserService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  registerUserToBackEnd(): void {

    const userToValidate = this.SetUserDataToSendFromForm();

    this.loginUser(userToValidate);
  }

  loginUser(user: User): void {
    this.userService.postUserDataToBackEnd(user).subscribe(
      response => {
        if (response.body?.token) {
          this.userService.saveToken(response.body.token); // Save the token in local storage
          this.snackBar.open(`Welcome ${response.body.email}!`, 'Close', {
            duration: 5000,
            horizontalPosition: 'center',
            verticalPosition: 'top'
          });
        }
      },
      error => {
        this.snackBar.open('Login failed. Please check your credentials.', 'Close', {
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }
    );
  }

  logOut(): void {
    this.userService.logout();
    this.snackBar.open('You have been logged out.', 'Close', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  SetUserDataToSendFromForm(): User {
    this.userToSend.email = this.myReactiveForm.value.Email;
    this.userToSend.password = this.myReactiveForm.value.Password;
    return this.userToSend;
  }
}
