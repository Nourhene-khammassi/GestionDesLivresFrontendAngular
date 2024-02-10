import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
const routes: Routes = [
  { path: 'livres', component: LivresComponent },
  { path: 'add-livre', component: AddLivreComponent },
  { path: 'update-livre/:id', component: UpdateLivreComponent },
  { path: 'rechercheParGenre', component: RechercheParGenreComponent},
  { path: 'rechercheParTitre', component: RechercheParTitreComponent},
  { path: '', redirectTo: 'livres', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
