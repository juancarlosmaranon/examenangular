import { Component, OnInit } from '@angular/core';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public cubos!: Array<Cubo>;
  public modelos!: Array<string>;

  constructor(
    private _service: CuboService
  ) { }

  loadCubos():void{
    this._service.getCubos().subscribe(response=>{ 
      this.cubos = response;
      console.log(response);
    })
  }
  loadMarcas():void{
    this._service.getMarcas().subscribe(response=>{
      this.modelos = response;
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.loadCubos();
    this.loadMarcas();
  }

}
