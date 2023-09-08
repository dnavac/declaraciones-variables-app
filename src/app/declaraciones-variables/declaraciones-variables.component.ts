import { Component } from '@angular/core';
import { ValidacionService } from '../validacion.service';

@Component({
  selector: 'app-declaraciones-variables',
  templateUrl: './declaraciones-variables.component.html',
  styleUrls: ['./declaraciones-variables.component.css']
})
export class DeclaracionesVariablesComponent {
  lineaDeclaracion: string = '';
  identificador: string = '';
  esDeclaracionValida: boolean | undefined;
  esIdentificadorValido: boolean | undefined;

  constructor(private validacionService: ValidacionService) {}

  validarDeclaracion(): void {
    this.esDeclaracionValida = this.validacionService.validarDeclaracionVariable(this.lineaDeclaracion);
  }

  validarIdentificador(): void {
    this.esIdentificadorValido = this.validacionService.validarIdentificador(this.identificador);
  }
}
