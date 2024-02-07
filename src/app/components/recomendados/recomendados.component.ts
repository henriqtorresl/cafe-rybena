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

}