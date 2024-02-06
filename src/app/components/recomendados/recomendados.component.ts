import { Component, ElementRef, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-recomendados',
  templateUrl: './recomendados.component.html',
  styleUrls: ['./recomendados.component.scss']
})
export class RecomendadosComponent implements OnInit {

  constructor(
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    
  }

  proximo(): void {
    const elem = this.elementRef.nativeElement.children[1].children[1];
    const item = elem.getElementsByClassName('item');

    elem.append(item[0]);
  }

}