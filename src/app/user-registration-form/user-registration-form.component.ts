import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.css']
})
export class UserRegistrationFormComponent implements OnInit {

  constructor(private fB: FormBuilder, private userService: UserService) { }

  userRegistrationForm: any;

  ngOnInit(): void {
    this.userRegistrationForm = this.fB.group({
      firstName: ["John", Validators.required],
      lastName: ['Doe', Validators.required],
      username: ['johndoe', Validators.required],
      email: ['johndoe@mail.com', Validators.email],
      countryCode: ["India (+91)"],
      phone: ['8209759721', [Validators.minLength(10), Validators.maxLength(10)]],
      addressLine1: ['Kattie Turnpike', Validators.required],
      addressLine2: ['Suite 198', Validators.required],
      cityDistrict: ['Lebsackbury', Validators.required],
      stateProvince: ['Maharastra', Validators.required],
      postalcode: ['31428-2261', Validators.required],
      country: ['India', Validators.required],
      termsAndCondition: [true, Validators.required]

    })
  }

  submitUserRegistrationForm() {
    console.log(this.userRegistrationForm.value);
    this.userService.addUser(this.userRegistrationForm.value).subscribe(user => console.log(user));
  }

}
