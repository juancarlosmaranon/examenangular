import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  @ViewChild("cajaemail") cajaemail!: ElementRef;
  @ViewChild("cajacontra") cajacontra!: ElementRef;

  constructor(
    private _service: CuboService,
    private _activeRoutes:ActivatedRoute,
    private _router: Router
  ) { }

  realizarLogin(): void {
    var email = this.cajaemail.nativeElement.value;
    var contra = this.cajacontra.nativeElement.value;

    this._service.sacarLogin(email,contra).subscribe(res => {
      
      environment.token = res.response;
      console.log(res.response);
      this._router.navigate(['/perfil']);
      // console.log(environment.token)
      // this._service.getEmpleados().subscribe(response => {
      //   this.usuario = response;
      //   console.log("Dentro Check")
      //   console.log(this.usuario)
  
      // })

    })  
  }

  ngOnInit(): void {
    
  }
}
