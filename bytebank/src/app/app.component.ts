import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bytebank';

  constructor(private service: TransferenciaService){

  }
  //destino: number;
  //valor: number;

  transferir($event){
    this.service.adicionar($event);

  }
}
