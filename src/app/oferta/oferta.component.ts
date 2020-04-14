import { Oferta } from './../shared/ofertas.model';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { CarrinhoService } from '../carrinho.service'



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
    private ofertaService: OfertasService,
    private carrinhoService: CarrinhoService
    ) { }

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

  public adicionarItemCarrinho(): void {
    this.carrinhoService.incluirItem(this.oferta)
    console.log(this.carrinhoService.exibirItens())

  }

}
