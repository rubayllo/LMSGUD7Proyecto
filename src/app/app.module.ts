import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PlantillaComponent,
    ReactivoComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
