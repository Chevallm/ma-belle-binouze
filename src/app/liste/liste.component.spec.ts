import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComponent } from './liste.component';

import * as moment from 'moment';

describe('ListeComponent', () => {
  let component: ListeComponent;
  let fixture: ComponentFixture<ListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('trier(par: string)', () => {
    it('doit renvoyer une liste trié par nom', () => {
      component.bieres.push(
        { nom: 'Cuvée des Trolls'},
        { nom: 'Rasta Trolls'},
        { nom: 'Bush Ambré'},
        { nom: 'Rochefort 10'},
        { nom: 'Tripel Karmeliet'},
        { nom: 'Kwak'}
      )
      component.trier('nom')
      expect(component.bieres).toBe([
        { nom: 'Bush Ambré'},
        { nom: 'Cuvée des Trolls'},
        { nom: 'Kwak'},
        { nom: 'Rasta Trolls'},
        { nom: 'Rochefort 10' },
        { nom: 'Tripel Karmeliet'},
      ])
    })
  })
});
