import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      lastName: new FormControl(''),
      age: new FormControl(''),
    });
  }
}
