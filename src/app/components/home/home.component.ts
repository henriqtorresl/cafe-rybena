import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    
  }

  abrirCatalogo(): void {
    this.dialog.open(CatalogoComponent, {
      width: '850px'
    });
  }


  buy(): void {
    this.snackbar.open('Não é possível fazer pedidos no momento!', 'OK', {
      duration: 3000
    });
  }

}