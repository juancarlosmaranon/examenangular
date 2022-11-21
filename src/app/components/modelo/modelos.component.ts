import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modelos',
  templateUrl: './modelos.component.html',
  styleUrls: ['./modelos.component.css']
})
export class ModelosComponent implements OnInit {

  public cubos!: Array<Cubo>;
  public marca!: string;


  constructor(
    private _service: CuboService,
    private _activeRoutes:ActivatedRoute,
    private _router: Router
  ) {}

  loadMarcas(marca:string):void{
    this._service.getCubosModelo(marca).subscribe(response=>{
      this.cubos = response;
      console.log(response);
    })
  }

  detalles(id:number):void{
    this._service.detallesCubo(id).subscribe(response=>{
      this._router.navigate(["/cubo/",id]);
    })
  }
  
  ngOnInit(): void {
    this._activeRoutes.params.subscribe((params:Params)=>{
      if(params['marca'] !=null){
        this.marca = params['marca'];
        this.loadMarcas(this.marca);
      }
    })
  }

}
