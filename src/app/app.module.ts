import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LivresComponent } from './livres/livres.component';
import { AddLivreComponent } from './add-livre/add-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { LivreService } from './service/livre.service';
import {HttpClientModule } from '@angular/common/http';
import { RechercheParGenreComponent } from './recherche-par-genre/recherche-par-genre.component';
import { RechercheParTitreComponent } from './recherche-par-titre/recherche-par-titre.component';
import { SearchFilterPipe } from './search-filter.pipe';
//import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  declarations: [
    AppComponent,
    LivresComponent,
    AddLivreComponent,
    UpdateLivreComponent,
    RechercheParGenreComponent,
    RechercheParTitreComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //Ng2SearchPipeModule
  ],
  providers: [LivreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
