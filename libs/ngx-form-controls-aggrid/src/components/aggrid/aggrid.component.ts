import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormControlText as NgxFormControlText } from '../../controls/form-control-text';
import { BaseObject } from '../../objects/base-object';

@Component({
  selector: 'ngx-form-control-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {
  @Input() mode: string|null = null;
  @Input() formElement = new NgxFormControlText('', {});
  @Input() elementClass = '';
  @Input() id = '';

  constructor() { }

  ngOnInit() {
  }

  realMode() {
    if (this.mode === null) {
      return this.formElement.elementData.mode;
    }
    return this.mode;
  }

}
