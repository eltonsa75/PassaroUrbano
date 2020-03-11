import { Oferta } from './../shared/ofertas.model';
import { Observable } from 'rxjs/Observable';
import { OfertasService } from './../ofertas.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import '../util/rxjs-extensions'


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>

  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa //retorno ofertas[]
    .debounceTime(1000)//executa a ação do switchMap após 1 segundo
    .distinctUntilChanged()// para fazer pesquisas distintas
    .switchMap((termo: string) => {
      
       if(termo.trim() == '') {
         // retornar um observable de array de ofertas vazio
         return Observable.of<Oferta[]>([])
       }
      return this.ofertasService.pesquisaOfertas(termo)
    })
    .catch((err: any) => {
      return Observable.of<Oferta[]>([])
    })
  }

  public pesquisa(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca)
}
//Limpar o menu de pesquisa
public limpaPesquisa(): void {
  this.subjectPesquisa.next('')
}

}
