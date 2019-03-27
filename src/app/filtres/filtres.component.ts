import { Component, OnInit, Input } from '@angular/core';
import { Biere } from '../models/biere';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { FiltreEnum } from './filtres.enum';

@Component({
  selector: 'app-filtres',
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.css']
})
export class FiltresComponent {

  @Input() bieres: Biere[]
  filtres: FiltreEnum[]

  constructor(
    public dialog: MatDialog
  ) { }

  openDialog(): void {
    this.dialog.open(DialogComponent)
  }


}
