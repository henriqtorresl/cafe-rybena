import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-recomendados',
  templateUrl: './recomendados.component.html',
  styleUrls: ['./recomendados.component.scss']
})
export class RecomendadosComponent implements OnInit {

  constructor(
    private elementRef: ElementRef,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    
  }

  anterior(): void {
    const elem = this.elementRef.nativeElement.children[2].children[1];
    const item = elem.getElementsByClassName('item');

    elem.append(item[0]);
  }

  proximo(): void {
    const elem = this.elementRef.nativeElement.children[2].children[1];
    const item = elem.getElementsByClassName('item');

    elem.prepend(item[2]);
  }

  compra(): void {
    this.snackBar.open('No momento, não é possível realizar a compra...', 'OK', {
      duration: 4000
    });
  }

  anteriorMobile(): void {
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

  proximoMobile(): void {
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