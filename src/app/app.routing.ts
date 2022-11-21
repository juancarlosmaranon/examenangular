import { Routes, RouterModule } from "@angular/router";
import {ModuleWithProviders} from '@angular/core';
import { HomeComponent } from "./components/home/home.component";
import { ModelosComponent } from "./components/modelo/modelos.component";
import { CuboComponent } from "./components/cubo/cubo.component";
import { LoginComponent } from "./components/login/login.component";
import { RegistrarComponent } from "./components/registrar/registrar.component";
import { PerfilusuarioComponent } from "./components/perfilusuario/perfilusuario.component";
// import { FormsModule } from '@angular/forms';

const appRoutes: Routes=[
    {path: "", component: HomeComponent},
    {path: "modelos/:marca", component: ModelosComponent},
    {path: "cubo/:id", component: CuboComponent},
    {path: "loguear", component: LoginComponent},
    {path: "registrar", component: RegistrarComponent},
    {path: "perfil", component:PerfilusuarioComponent}
]
export const appRoutingProviders: any[] = []
export const routing: ModuleWithProviders<any> = 
RouterModule.forRoot(appRoutes);