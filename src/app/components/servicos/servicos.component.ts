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
    if (
      this.formulario.value.data &&
      this.formulario.value.qntPessoas &&
      this.formulario.value.nome &&
      this.formulario.value.email &&
      this.formulario.value.telefone
    ) {      
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

  anterior(): void {
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('item-mobile');

    for (let i = 0; i < elements.length; i++) {      
      var display = elements[i].getAttribute('style');
  
      if (display === 'display: block;') {
        // Esconde o elemento atual
        elements[i].setAttribute('style', 'display: none;');
  
        // Verifica se há um elemento anterior
        if (i > 0) {
          // Mostra o elemento anterior
          elements[i - 1].setAttribute('style', 'display: block;');
        } else {
          // Se não houver elemento anterior, mostra o último elemento
          elements[elements.length - 1].setAttribute('style', 'display: block;');
        }
        
        // Sai do loop após encontrar o primeiro elemento visível
        break;
      }
    }
  }

  proximo(): void {
    const elements: HTMLCollectionOf<Element> = document.getElementsByClassName('item-mobile');

    for (let i = 0; i < elements.length; i++) {      
      var display = elements[i].getAttribute('style');
  
      if (display === 'display: block;') {
        // Esconde o elemento atual
        elements[i].setAttribute('style', 'display: none;');
        
        // Se eu estiver na última posição
        if (i == elements.length - 1) {
          // Mostra o primeiro elemento
          elements[0].setAttribute('style', 'display: block;');
        } else {
          // Senão, eu mostro o próximo
          elements[i + 1].setAttribute('style', 'display: block;');
        }
        
        // Sai do loop após encontrar o primeiro elemento visível
        break;
      }
    }
  }

}