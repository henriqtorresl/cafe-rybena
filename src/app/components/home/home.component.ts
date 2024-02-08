import { Component, OnInit } from '@angular/core';
import { CatalogoComponent } from '../catalogo/catalogo.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    
  }

  abrirCatalogo() {
    this.dialog.open(CatalogoComponent, {
      width: '850px'
    });
  }

}