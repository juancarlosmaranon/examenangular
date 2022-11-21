import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra';


@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  public compras!:Array<Compra>;

  constructor() { }

  ngOnInit(): void {
  }

}
