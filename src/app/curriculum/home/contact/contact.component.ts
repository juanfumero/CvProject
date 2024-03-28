import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  formGroup!: FormGroup;

  circumference: number = 2 * Math.PI * 40;
  offset: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
        fname: ['', Validators.required],
        lname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        subject: ['', Validators.required],
        message: ['', Validators.required]
      });
  }

  onSubmit() {    
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }

}