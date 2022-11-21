import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-cubo',
  templateUrl: './cubo.component.html',
  styleUrls: ['./cubo.component.css']
})
export class CuboComponent implements OnInit {

  public comentario!: Array<Comentario>;
  public id!: number;

  constructor(
    private _service: CuboService,
    private _activeRoutes:ActivatedRoute,
    private _router: Router
  ) { }

    loadCubo(id:number):void{
      this._service.detallesCubo(id).subscribe(response=>{
        this.comentario= response;
        console.log(response);
      })
    }

  ngOnInit(): void {
    this._activeRoutes.params.subscribe((params:Params)=>{
      if(params['id'] !=null){
        this.id = parseInt(params['id']);
        this.loadCubo(this.id);
      }
    })
  }

}
