import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { contact } from './contact'

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  contactForm = new FormGroup({
    name : new FormControl("",Validators.required),
    emailId : new FormControl("test@gmail.com",Validators.required),
    purpose : new FormControl("0"),
    contact : new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    message : new FormControl("")
  })

  constructor() { }

  ngOnInit(): void {
    this.contactForm.patchValue({
      name: ''
    })
  }

  submitForm(){
    console.log(this.contactForm.value);
    this.contactForm.reset();
  }
}
