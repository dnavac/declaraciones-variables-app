import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() { }

  validarDeclaracionVariable(linea: string): boolean {
     // Expresión regular para validar la declaración de variables
    const regexDeclaracion =  /^declare\s+([a-zA-Z_]\w*(?:,\s*[a-zA-Z_]\w*)*)\s+(entero|real|cadena|lógico|fecha)\s*;$/;
    return regexDeclaracion.test(linea);
  }

  validarIdentificador(identificador: string): boolean {
    // Expresión regular para validar identificadores
    const regexIdentificador = /^[a-zA-Z_][a-zA-Z0-9_]{0,14}$/;
    return regexIdentificador.test(identificador);
  }
}
