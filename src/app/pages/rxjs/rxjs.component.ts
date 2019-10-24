import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
// import { map } from 'rxjs/internal/operators/map';
// import { retry } from 'rxjs/operators';
import { map, filter } from 'rxjs/operators';



@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  subscription: Subscription;

  constructor() {

    this.subscription = this.regresaObservable()
    .subscribe(
      numero => console.log('Subs ', numero),
      error => console.log('Error', error),
      () => console.log('El observador ya termino')
      );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      const intervalo = setInterval(() => {
          contador += 1;


          const salida = {
            valor: contador
          };


          observer.next(salida); // Esto dice que llego el proximo valor de contador
          // if (contador === 3) {
         //   clearInterval(intervalo);
           // observer.complete();
        //  }
          // if (contador === 2) {
            // clearInterval(intervalo);
           // observer.error('Auxilio');
         // }
      }, 1000);

    }).pipe(
      map((resp: any) => {
        // console.log(resp);
        return resp.valor;
      }),
      filter((valor, index) => {
        if((valor % 2) === 1) {
          // impar
          return true;
        } else {
          return false;

        }
        // console.log('Valores', valor, index);
        // return true;
      })
    );

//  return obs;

  }

}
