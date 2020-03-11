import { Oferta } from './../shared/ofertas.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [OfertasService]
})
export class OfertaComponent implements OnInit, OnDestroy {

 

  public oferta: Oferta

  constructor(
    private route: ActivatedRoute,
    private ofertaService: OfertasService) { }

  ngOnInit() {
    // Atualizar a rota a partir da pesquisa
    this.route.params.subscribe((parametros: Params) => {

    this.ofertaService.getOfertaPorId(parametros.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })
    })
  }

  ngOnDestroy(){
  }

}
