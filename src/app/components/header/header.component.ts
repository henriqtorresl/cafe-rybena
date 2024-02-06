import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() classeItens!: string;

  constructor() {}

  ngOnInit(): void {
    
  }

  // arrumar essa lógica
  ativarBotao(rota: any): string {
    if (rota == 'home') {
      return 'activate';
    } else {
      return '';
    }
  }
}