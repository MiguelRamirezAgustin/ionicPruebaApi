import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {
  arg:any;

  constructor(private activedRoter: ActivatedRoute, private router: Router) { 
    this.activedRoter.queryParams.subscribe(params =>{
      if(params && params.usuarioId){
        this.arg = JSON.parse(params.usuarioId);
        console.log(this.arg);
      }
    });
  }

  ngOnInit() {
  }


}
