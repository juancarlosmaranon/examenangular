import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";


@Injectable()
export class CuboService{

    constructor(private _http: HttpClient){}

    getEmpleados(): Observable<any> {

        var request = "/api/Manage/PerfilUsuario";
        var url = environment.urlApiCubos + request;
        var header = new HttpHeaders().set("Authorization","Bearer "+environment.token);
        return this._http.get(url, {headers: header})

    }

    sacarLogin(email: string,password: string): Observable<any> {
        var request = "/Auth/Login"
        var url = environment.urlApiCubos + request;
        var header = new HttpHeaders().set("content-type","application/json");
        var login = JSON.stringify({"email":email,"password":password});
        return this._http.post(url,login,{headers: header});
    }

    detallesCubo(id:number):Observable<any>{
        var request = '/api/ComentariosCubo/GetComentariosCubo/'+id;
        var url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    getCubosModelo(marca:string):Observable<any>{
        var request = '/api/Cubos/CubosMarca/'+ marca;
        var url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    getMarcas():Observable<any>{
        var request = '/api/Cubos/Marcas';
        var url = environment.urlApiCubos + request;
        return this._http.get(url);
    }

    getCubos():Observable<any>{
        var request = '/api/Cubos';
        var url = environment.urlApiCubos + request;
        return this._http.get(url);
    }
}