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
    const resultadoValidacion = this.validacionService.validarDeclaracionVariable(this.lineaDeclaracion);
    this.esDeclaracionValida = resultadoValidacion.esValida;
    
    if (!this.esDeclaracionValida) {
      const numeroLineaError = resultadoValidacion.numeroLinea;
      if (numeroLineaError !== -1) {
        alert(`Error en la línea ${numeroLineaError}: Declaración inválida`);
      } else {
        alert('Declaración inválida');
      }
    } else {
      // Actualizar la lista de variables por tipo de dato
      this.variablesPorTipoDato = this.validacionService.getVariablesByTipoDato(this.tipoDatoSeleccionado || '');
    }
  }
  

  validarIdentificador(): void {
    this.esIdentificadorValido = this.validacionService.validarIdentificador(this.identificador);
  }
}
