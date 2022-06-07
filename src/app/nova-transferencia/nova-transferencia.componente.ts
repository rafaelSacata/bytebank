import { Component, Output } from "@angular/core";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss'],
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | undefined;
  destino: number | undefined;

  transferir(): void {
    console.log("solicitada nova transferência!");

    const valorEmitir = {
      valor: this.valor,
      destino: this.destino
    };

    this.aoTransferir.emit(valorEmitir);

  }
}
