import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclaracionesVariablesComponent } from './declaraciones-variables/declaraciones-variables.component';
import { ValidacionService } from './validacion.service';
@NgModule({
  declarations: [
    AppComponent,
    DeclaracionesVariablesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [ValidacionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
