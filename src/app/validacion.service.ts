import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  private variables: { [key: string]: string } = {};

  constructor() { }

  validarDeclaracionVariable(linea: string): { esValida: boolean, numeroLinea: number } {
    const lineas = linea.split('\n');
    for (let i = 0; i < lineas.length; i++) {
      const regexDeclaracion = /^declare\s+([a-zA-Z_]\w*(?:,\s*[a-zA-Z_]\w*)*)\s+(entero|real|cadena|lógico|fecha)\s*;$/;
      const match = regexDeclaracion.exec(lineas[i]);
      
      if (match) {
        const listaVariables = match[1].split(',').map(variable => variable.trim());
        const tipoDato = match[2];
        
        listaVariables.forEach(variable => {
          this.variables[variable] = tipoDato;
        });
      } else {
        return { esValida: false, numeroLinea: i + 1 }; // Retorna el número de línea en caso de error
      }
    }
  
    return { esValida: true, numeroLinea: -1 }; // -1 indica que no hubo errores
  }
  
  validarIdentificador(identificador: string): boolean {
    // Expresión regular para validar identificadores
    const regexIdentificador = /^[a-zA-Z_][a-zA-Z0-9_]{0,14}$/;
    return regexIdentificador.test(identificador);
  }

  getVariablesByTipoDato(tipoDato: string): string[] {
    return Object.entries(this.variables)
      .filter(([_, value]) => value === tipoDato)
      .map(([key, _]) => key);
  }
}
