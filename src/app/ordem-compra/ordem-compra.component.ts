import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number

//Validando  utilizando FormGroup
  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3), Validators.maxLength(120) ]),
    'numero': new FormControl(null, [ Validators.required, Validators.minLength(1), Validators.maxLength(20) ]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [ Validators.required ])
  })

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    
  }

  public confirmarCompra(): void {
    if(this.formulario.status === 'INVALID'){
      console.log('formulário está inválido')

      
      this.formulario.get('endereco').markAllAsTouched()
      this.formulario.get('numero').markAllAsTouched()
      this.formulario.get('complemento').markAllAsTouched()
      this.formulario.get('formaPagamento').markAllAsTouched()
    } else {

      let pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento
      )
      // Enviando dados para API utilizando  OrdemCompraService
       this.ordemCompraService.efetivarCompra(pedido)
       .subscribe((idPedido: number) => {
         this.idPedidoCompra = idPedido     
       })
    }
  }
}
