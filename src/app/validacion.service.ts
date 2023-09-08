import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  private variables: { [key: string]: string } = {};

  constructor() { }

  validarDeclaracionVariable(linea: string): boolean {
     // Expresión regular para validar la declaración de variables
    const regexDeclaracion =  /^declare\s+([a-zA-Z_]\w*(?:,\s*[a-zA-Z_]\w*)*)\s+(entero|real|cadena|lógico|fecha)\s*;$/;
    const match = regexDeclaracion.exec(linea);

    if (match) {
      const listaVariables = match[1].split(',').map(variable => variable.trim());
      const tipoDato = match[2];

      listaVariables.forEach(variable => {
        this.variables[variable] = tipoDato;
      });

      return true;
    }

    return false;
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
