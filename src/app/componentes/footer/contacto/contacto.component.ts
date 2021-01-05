import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators, NgForm, FormGroupDirective, FormControl } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  formContacto: FormGroup;
  get nombre(): AbstractControl { return this.formContacto.get('nombre'); }
  get telefono(): AbstractControl { return this.formContacto.get('telefono'); }
  get mensaje(): AbstractControl { return this.formContacto.get('mensaje'); }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formContacto = this.createFormContacto();
  }

  enviarContactor(): void {
    if (this.formContacto.invalid){
      return;
    }
    this.form.resetForm();
  }

  createFormContacto(): FormGroup {
    return  this.fb.group({
      nombre: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      email: [''],
      mensaje: ['', [Validators.required]]
    });
  }


}
