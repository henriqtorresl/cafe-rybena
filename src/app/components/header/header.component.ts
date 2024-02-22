import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() classeItens!: string;
  isSidebarOpen = false;

  constructor(
    private router: Router,
    private elementRef: ElementRef
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

  irParaHome(): void {
    this.router.navigateByUrl('home');
  }

  onMenuButtonClick(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isSidebarOpen = false; // Fecha a sidebar se o clique for fora dela
    }
  }

}