import { Component, VERSION } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  FormArray,
  Validators
} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  viewForm: FormGroup;
  inputArr;
  genders;
  ngOnInit() {
    this.genders = [
      {
        name: 'Male',
        value: 'M'
      },
      {
        name: 'Female',
        value: 'F'
      }
    ];
    this.inputArr = [
      {
        _id: 'aaaaasssss',
        first_name: 'Alok',
        second_name: 'Singh',
        email: 'alokps6295@gmail.com',
        gender: 'M'
      }
    ];
    this.viewForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      first_name: new FormControl(null, [Validators.required]),
      last_name: new FormControl(null),
      gender: new FormControl(null, [Validators.required])
    });
  }

  addStudents() {
    if (this.viewForm.status == 'VALID') {
      console.log(this.viewForm.value);

      this.inputArr.push(this.viewForm.value);
      console.log(this.inputArr);
    }
  }
}
