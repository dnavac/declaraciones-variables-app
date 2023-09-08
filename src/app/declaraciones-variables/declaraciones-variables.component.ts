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
  tipoDatoSeleccionado: string | undefined;
  variablesPorTipoDato: string[] = [];

  constructor(private validacionService: ValidacionService) {}

  validarDeclaracion(): void {
    this.esDeclaracionValida = this.validacionService.validarDeclaracionVariable(this.lineaDeclaracion);
    if (this.esDeclaracionValida) {
      // Actualizar la lista de variables por tipo de dato
      this.variablesPorTipoDato = this.validacionService.getVariablesByTipoDato(this.tipoDatoSeleccionado || '');
    }
  }

  validarIdentificador(): void {
    this.esIdentificadorValido = this.validacionService.validarIdentificador(this.identificador);
  }
}
