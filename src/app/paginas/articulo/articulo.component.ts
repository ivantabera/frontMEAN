import { Component, OnInit } from '@angular/core';

//clase que se importa para navegar entre paginas
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
