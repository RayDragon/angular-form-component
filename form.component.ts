import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import * as _form from './form'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() form:_form.Form;
  constructor(private cdr:ChangeDetectorRef) { }

  ngOnInit() {
    this.cdr.detectChanges();
    console.log(this.form, typeof(this.form))
  }

}
