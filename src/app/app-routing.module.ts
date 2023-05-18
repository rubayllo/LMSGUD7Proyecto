import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlantillaComponent } from './plantilla/plantilla.component';
import { ReactivoComponent } from './reactivo/reactivo.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'plantilla', component: PlantillaComponent},
  {path: 'reactivo', component: ReactivoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
