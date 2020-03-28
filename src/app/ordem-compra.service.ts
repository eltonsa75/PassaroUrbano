
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Pedido } from './shared/pedido.model';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_API } from './app.api';

@Injectable()
export class OrdemCompraSerrvice {

    constructor(private http: HttpClient){}

    public efetivarCompra(pedido : Pedido): Observable<number> {

       // Requisição em Post
        let headers: HttpHeaders = new HttpHeaders()
        headers.append('Content-type', 'application/json')

        return this.http.post(
            `${URL_API}/pedidos`,
            (pedido),
            ({headers: headers})
        )
        .map((resposta: Response) => resposta.id)
    }
}