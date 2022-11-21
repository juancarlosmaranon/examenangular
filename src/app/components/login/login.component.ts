import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { CuboService } from 'src/app/services/cubo.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario!: Array<Usuario>;

  constructor(
    private _service: CuboService,
    private _activeRoutes:ActivatedRoute
  ) { }

  realizarLogin(): void {
    console.log(environment.email)

    if (environment.token == null){
      this._service.sacarLogin(environment.email,environment.password).subscribe(res => {
        console.log(res);
        environment.token = res.response;
        // console.log(environment.token)
        // this._service.getEmpleados().subscribe(response => {
        //   this.usuario = response;
        //   console.log("Dentro Check")
        //   console.log(this.usuario)
    
        // })

    });
    }    
  }

  ngOnInit(): void {
    
  }
}
