import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DetailComponent } from './detail/detail.component';
import { ListeComponent } from './liste/liste.component';
import { AjoutComponent } from './ajout/ajout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './layout/header/header.component';
import {
  MatToolbarModule, MatButtonModule, MatIconModule, MatGridListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatDialogModule
 } from '@angular/material';
import { FiltresComponent } from './filtres/filtres.component';
import { DialogComponent } from './filtres/dialog/dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailComponent,
    ListeComponent,
    AjoutComponent,
    HeaderComponent,
    FiltresComponent,
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
