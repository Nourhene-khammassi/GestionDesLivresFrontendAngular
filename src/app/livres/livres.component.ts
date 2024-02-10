import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { LivreService } from '../service/livre.service';
import { Genre } from '../model/genre.model';
@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {


  livres?: Livre[];//tableau de livres
  constructor(private livreService: LivreService) {
    //this.livres = livreService.listeLivre();
  }

  ngOnInit(): void {
    this.chargerLivres();
  }
  chargerLivres(){
    this.livreService.listeLivre().subscribe(livs => {
      console.log(livs);
      this.livres = livs;
      });
  }

  supprimerLivre(l: Livre) {
    if (l.idLivre !== undefined) {
      let conf = confirm("Etes-vous sûr ?");
      if (conf) {
        this.livreService.supprimerLivre(l.idLivre).subscribe(() => {
          console.log("livre supprimé");
          this.chargerLivres();
        });
      }
    }
  }


}
