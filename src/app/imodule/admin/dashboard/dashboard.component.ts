import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit {

  // TEST
  RegistrationForm: FormGroup;
  IsSpanNameInValid = false;
  IsSpanEmailInValid = false;
  IsSpanPhoneNumberOnly = false;

  // declaration for input text
  inputUsername: string;
  inputEmail: string;
  inputPhoneNo: string;
  inputSkillsets: string;
  inputHobby: string;
  windowRef: any;
  user: any;
  totalUsers: Number = 0;
  itemsPerPage: any = 5;
  currentPage: any = 1;

  public allusers: any[];
  public IsEdit = false;
  public ID: string;

  // END TEST

  constructor(
    private fb: FormBuilder,
    private newService: CommonService) { }

  createForm() {
    this.RegistrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      phonenumber: ['', Validators.required],
      skillsets: ['', Validators.required],
      hobby: ['', Validators.required]
    });
  }

  resetFields() {
    window.location.reload();
  }

  ngOnInit() {
    this.createForm();
    this.newService.getAllUsers().subscribe(data => {
      console.log(data);
      this.allusers = data;
      this.totalUsers = data.length;
    });
  }

  CheckValidateName(value: string) {
    const names = value;
    const regx = /^[A-Za-z\s]+$/;
    // console.log(names);
    if (names.length > 0) {
      if (regx.test(names)) {
        // console.log('true');
        this.IsSpanNameInValid = false;
      } else {
        // console.log('false');
        this.IsSpanNameInValid = true;
      }
    }
  }

  CheckValidateEmail(value: string) {
    const myEmail = value;
    const regx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
    // console.log(email);
    if (myEmail.length > 0) {
      if (regx.test(myEmail)) {
        this.IsSpanEmailInValid = false;
      } else {
        this.IsSpanEmailInValid = true;
      }
    }
  }

  onClick_EditUser(id: any) {
    console.log(id);
    this.newService.getUserid(id)
      .subscribe(data => {
        console.log(data);
        this.ID = data.id;
        this.inputUsername = data.Username;
        this.inputEmail = data.Email;
        this.inputHobby = data.Hobby;
        this.inputPhoneNo = data.PhoneNumber;
        this.inputSkillsets = data.SkillSets;
        this.IsEdit = true;
        this.RegistrationForm.get('username').disable();
      }, error => {
        alert(error);
      });
  }

  onClick_DeleteUser(id: any) {
    console.log(id);
    this.newService.deleteUser(id)
      .subscribe(data => {
        console.log(data);
        alert(data.message);
        this.resetFields();
      }, error => {
        alert(error);
      });
  }

  onSubmit(value: any) {
    if (this.IsEdit === true) {
      this.newService.updateUser(value, this.ID)
        .subscribe(data => {
          console.log(data);
          alert(data.message);
          this.resetFields();
        }, error => {
          alert(error);
        });
    } else {
      this.newService.addUser(value)
        .subscribe(data => {
          console.log(data);
          alert(data.message);
          this.resetFields();
        }, error => {
          alert(error);
        });
    }
  }
}
