import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { CuboService } from 'src/app/services/cubo.service';

@Component({
  selector: 'app-perfilusuario',
  templateUrl: './perfilusuario.component.html',
  styleUrls: ['./perfilusuario.component.css']
})
export class PerfilusuarioComponent implements OnInit {
  public user!: Usuario;

  constructor(private _service: CuboService) { }

  ngOnInit(): void {
    this._service.getPerfilUsuario().subscribe(response => {
      this.user = response;
    })
  }

}
