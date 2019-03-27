import { Component, OnInit } from '@angular/core';
import { Biere } from '../models/biere';
import * as moment from 'moment';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  bieres: Biere[] = []

  constructor() { }

  ngOnInit() {
    this.bieres.push(
      { nom: 'Cuvée des Trolls', photo: 'https://img.saveur-biere.com/img/p/126-14990-v4_product_img.jpg', brasserie: 'Dubuisson', dateAcquisistion: moment()},
      { nom: 'Rasta Trolls', photo: 'https://img.saveur-biere.com/img/p/31903-45985-v4_product_img.jpg', brasserie: 'Dubuisson', dateAcquisistion: moment()},
      { nom: 'Bush Ambré', photo: 'https://img.saveur-biere.com/img/p/112-14247-v4_product_img.jpg', brasserie: 'Dubuisson', dateAcquisistion: moment().date(1).month(2).year(2019)},
      { nom: 'Rochefort 10', photo: 'https://img.saveur-biere.com/img/p/91-14652-v4_product_img.jpg', brasserie: 'Abbaye de Rochefort', dateAcquisistion: moment()},
      { nom: 'Tripel Karmeliet', photo: 'https://img.saveur-biere.com/img/p/82-14662-v4_product_img.jpg', brasserie: 'Brasserie Bosteels', dateAcquisistion: moment().date(2).month(2).year(2018)},
      { nom: 'Kwak', photo: 'https://img.saveur-biere.com/img/p/104-16465-v4_product_img.jpg', brasserie: 'Brasserie Bosteels', dateAcquisistion: moment()},
    )
  }

  trier(par: string): void {
    if (par === 'date') {
      this.bieres.sort( (a, b) => a.dateAcquisistion.unix() - b.dateAcquisistion.unix() )
    } else if (par === 'nom') {
      this.bieres.sort( (a, b) => a.nom > b.nom ? 1 : 0 )
    }
  }

}
