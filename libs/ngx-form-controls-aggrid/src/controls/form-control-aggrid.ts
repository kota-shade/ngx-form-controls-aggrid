import { FormControl} from '@angular/forms';
import { NpxBaseObject as BaseObject } from 'ngx-form-controls';
import {AbstractControlOptions} from '@angular/forms/src/model';
import {AsyncValidatorFn, ValidatorFn} from '@angular/forms/src/directives/validators';
import { NgxFormControlInterface } from 'ngx-form-controls';

export class FormControlAggrid extends FormControl implements NgxFormControlInterface {
  private _elementData = new BaseObject();

  constructor(
    formState?: any,
    validatorOrOpts?: ValidatorFn | ValidatorFn[] | AbstractControlOptions | null,
    asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null) {

    super(formState, validatorOrOpts, asyncValidator);
  }


  get elementData(): BaseObject {
    return this._elementData;
  }

  set elementData(value: BaseObject) {
    this._elementData = value;
  }
}
