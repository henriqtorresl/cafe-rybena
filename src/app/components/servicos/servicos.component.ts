import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss']
})
export class ServicosComponent implements OnInit {

  formulario!: FormGroup;

  constructor(
    private snackBar: MatSnackBar,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.criarFormulario();
  }

  criarFormulario(): void {
    this.formulario = this.formBuilder.group({
      data: ['', [Validators.required]],
      qntPessoas: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', [Validators.required]]
    });
  }

  reservar(): void {
    console.log(this.formulario.value);

    if (
      this.formulario.value.data &&
      this.formulario.value.qntPessoas &&
      this.formulario.value.nome &&
      this.formulario.value.email &&
      this.formulario.value.telefone
    ) {
      console.log('data preenchida')
      
      this.snackBar.open('Mesa Reservada com sucesso!', 'OK', {
        duration: 3000
      });

      this.formulario.reset();
    } else {
      this.snackBar.open('Preencha todos os campos corretamente!', 'OK', {
        duration: 3000
      });
    }
    
  }

}