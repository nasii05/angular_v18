import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ FormsModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userForm!: FormGroup;
  constructor(private fb: FormBuilder){
    this.userForm = this.fb.group({
        firstName: [''],
        lastName: [''],
        email: [''],
        rollNo: ['']
    })
  }


  createUser(){
    console.log(this.userForm.value);
  }


}
