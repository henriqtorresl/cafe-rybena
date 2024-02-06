import { DialogRef } from '@angular/cdk/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

  constructor(
    public dialogRef: DialogRef<string>
  ) {}

  ngOnInit(): void {

  }

}