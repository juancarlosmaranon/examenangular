import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {routing, appRoutingProviders} from './app.routing';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CuboService } from './services/cubo.service';
import { ModelosComponent } from './components/modelo/modelos.component';
import { CuboComponent } from './components/cubo/cubo.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    ModelosComponent,
    CuboComponent,
    LoginComponent,
    RegistrarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule, routing
  ],
  providers: [appRoutingProviders, CuboService],
  bootstrap: [AppComponent]
})
export class AppModule { }