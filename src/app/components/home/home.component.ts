import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cubos!: Array<Cubo>;

  constructor(
    private _service: CuboService,
    private _activeRoutes:ActivatedRoute
  ) { }

  loadCubos():void{
    this._service.getCubos().subscribe(response=>{
      this.cubos = response;
      console.log(response);
    })
  }

  ngOnInit(): void {
    this.loadCubos();
  }

}
