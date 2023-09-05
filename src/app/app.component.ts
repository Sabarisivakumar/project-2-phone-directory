import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listData: any;
  userForm!: FormGroup;
  userFormControls: any;
  isSubmitted:boolean = false;

  ngOnInit(): void {
    this.AssetFormInit();

  }
  constructor( private formBuilder: FormBuilder){
    this.listData = [];
  }

  AssetFormInit(){
    this.userForm = this.formBuilder.group({
      contactname: new FormControl('',[Validators.required,Validators.maxLength(20),Validators.pattern(/^[a-zA-Z][a-zA-Z '_-]{0,}$/)]),
      mobilenumber: new FormControl('',[Validators.required,Validators.maxLength(10),Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]),
      email: new FormControl('',[Validators.required,Validators.pattern(/^[A-Za-z]([a-zA-Z0-9._%+-])+@[a-z0-9.-]+\.[a-z]{2,4}$/)])
    })
    this.userFormControls = this.userForm.controls;

  }

  Addcontact(){
    this.isSubmitted = true;
    if(this.userForm.invalid){
      return
    }
    this.listData.push(this.userForm.value);
    this.userForm.reset();
    this.isSubmitted = false;
  }
  }




