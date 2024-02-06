import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() classeItens!: string;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  ativarBotao(rota: any): string {
    const rotaAtual = this.router.url;

    if (rotaAtual.includes(rota)) {
      return 'activate';
    } else {
      return '';
    }
  }
}