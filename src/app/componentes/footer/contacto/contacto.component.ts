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
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formContacto = this.createFormContacto();
  }

  enviarContactor(): void {
    console.log(this.formContacto.value);
    this.form.resetForm();
    console.log(this.formContacto);
  }

  createFormContacto(): FormGroup {
    return  this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: [''],
      mensaje: ['', Validators.required]
    });
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
