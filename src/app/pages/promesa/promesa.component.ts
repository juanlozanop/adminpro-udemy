import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html',
  styles: []
})
export class PromesaComponent implements OnInit {

  constructor() {



    this.contarTres().then(
      mensaje => console.log('Termino', mensaje)
    )
    .catch(error => console.log('Error en la promesa', error));

  }


  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    const promesa = new Promise<boolean>((resolve, reject) => {

      let contador = 0;
      const intervalo = setInterval(() => {

        contador += 1;
        console.log(contador);
        if (contador === 3) {
           resolve(true);
          // reject('simplemente un error');
           clearInterval(intervalo);
        }
      }, 1000);
    });

    return promesa;

  }

}
