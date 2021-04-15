import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appFieldValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: FieldValidatorDirective, multi: true}]
})
export class FieldValidatorDirective implements Validator{

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null{
    if(control.value.purpose === "0")
      return {purpose: {selection: true}};
    else
      return null;
  }

}
