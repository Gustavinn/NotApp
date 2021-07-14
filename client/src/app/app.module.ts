import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from  '@angular/material/card';
import { MatTableModule } from  '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { ListaUsuarioComponent } from './usuario/lista-usuario/lista-usuario.component';
import { CadastraUsuarioComponent } from './usuario/cadastra-usuario/cadastra-usuario.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import { CadastraNotaComponent } from './nota/cadastra-nota/cadastra-nota.component';
import { ListaNotaComponent } from './nota/lista-nota/lista-nota.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent,
    CadastraUsuarioComponent,
    CadastraNotaComponent,
    ListaNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTabsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
