import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { stateAbbreviations } from 'src/app/consts/stateAbbreviations.const';
import { FormsModel } from 'src/app/models/formModels.model';
import { ExampleForm } from 'src/app/models/models.model';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
  exampleForm: FormGroup<FormsModel>;
  exampleFormList: ExampleForm = {
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: null,
  };
  isFormFilled = false;
  statesList = stateAbbreviations;

  constructor() {
    this.exampleForm = new FormGroup<FormsModel>({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      address: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl(null),
    });
  }

  submitForm() {
    if (
      this.exampleForm.controls.firstName.value ||
      this.exampleForm.controls.lastName.value ||
      this.exampleForm.controls.address.value ||
      this.exampleForm.controls.city.value ||
      this.exampleForm.controls.state.value ||
      this.exampleForm.controls.zipCode.value
    ) {
      this.exampleFormList = {
        firstName: this.exampleForm.controls.firstName.value ?? undefined,
        lastName: this.exampleForm.controls.lastName.value ?? undefined,
        address: this.exampleForm.controls.address.value ?? undefined,
        city: this.exampleForm.controls.city.value ?? undefined,
        state: this.exampleForm.controls.state.value ?? undefined,
        zipCode: this.exampleForm.controls.zipCode.value ?? undefined,
      };
      this.isFormFilled = true;
    }
  }

  resetForm() {
    this.exampleForm.reset();
    this.exampleFormList = {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipCode: null,
    };
    this.isFormFilled = false;
  }
}
