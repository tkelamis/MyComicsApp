import { Component } from '@angular/core';
import { ComicService } from '../Services/comic.service';
import { Comic } from '../Shared/Models/Comic';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../Shared/Models/User';
import { UserService } from '../user.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  user: User = {};
  logIn: boolean = false;
  signUp: boolean = false;

  myReactiveForm = this.formBuilder.group({
    Email: ['', [Validators.required]],
    Password: [''],
  })

  constructor(private formBuilder:FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
  }

  registerUserToBackEnd(): void {

    const userToAdd = this.setUserFromFormValues();

    this.sendUserToBackEnd(userToAdd);

  }

  setUserFromFormValues(): User {
    if (this.myReactiveForm.value) {
      const valuesPassedFromFields = this.myReactiveForm.value;
      this.user.Email = valuesPassedFromFields.Email;
      this.user.Password = valuesPassedFromFields.Password;
    }
    console.log(this.user);
    return this.user;
  }

  sendUserToBackEnd(userToSend: User): void {
    this.userService.postUserToBackEnd(userToSend).subscribe(
      (result) => {
        console.log('New user created with ID:', result.id);
      },
      (error) => {
        console.error('Error creating user:', error);
      }
    )
  }

  SetLogInTrue(): void {
    this.logIn = true;
    console.log(this.logIn);
  }
  SetSignUpTrue(): void {
    this.signUp = true;
  }

  SetFlagsFalse(): void {
    this.logIn = false;
    this.signUp = false;
  }
}
