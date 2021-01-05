import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, AbstractControl, FormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoPrincipalComponent implements OnInit {

  @ViewChild('form') form: NgForm;
  formContacto: FormGroup;
  get nombre(): AbstractControl { return this.formContacto.get('nombre'); }
  get telefono(): AbstractControl { return this.formContacto.get('telefono'); }
  get mensaje(): AbstractControl { return this.formContacto.get('mensaje'); }
  get asunto(): AbstractControl { return this.formContacto.get('asunto'); }


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formContacto = this.createFormContacto();
    console.log(this.formContacto.value);
  }

  enviarContactor(): void {
    if (this.formContacto.invalid){
      return;
    }
    console.log(this.formContacto.value);
    this.form.resetForm();
  }

  createFormContacto(): FormGroup {
    return  this.fb.group({
      asunto: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      email: [''],
      mensaje: ['', Validators.required]
    });
  }
}
