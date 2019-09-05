import { Component } from '@angular/core';
import { DataServiceService } from '../service/data-service.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public services:DataServiceService, private router: Router) { }

  arraUsuario;

  ngOnInit() {
    this.usuarios();
  }

  usuarios(){
    this.services.getUsuarios().subscribe((res:any)=>{
     console.log('res--- ', res.results);
     this.arraUsuario=res.results;
    },error=>{
      console.log('Error--- ', error);
    })
  }

  detalle(e){
    const indice = e;
    console.log('Detalle ',indice)
    let navigationEx: NavigationExtras = {
      queryParams: {
        usuarioId: JSON.stringify(e)
      }
    };
    console.log('este es el que envia ' + JSON.stringify(navigationEx));
    this.router.navigate(['usuario'], navigationEx); 
  }

  

}
