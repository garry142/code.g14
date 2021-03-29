import { Component, OnInit } from '@angular/core';

interface componente{
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
componentes: componente[]=[

         {
           icon:"alert-circle",
           name: "alerta",
           redirecTo:"/alerta"
         },
         {
          icon:"cog-outline",
          name: "accion",
          redirecTo:"/accion"
        },
        {
          icon:"chatbox-ellipses-outline",
          name: "Tarjeta",
          redirecTo:"/tarjeta"
        },
        {
          icon:"document-text-outline",
          name: "Caja",
          redirecTo:"/caja"
        },
        {
          icon:"filter-circle-outline",
          name: "Modal",
          redirecTo:"/modal"
        },
        {
          icon:"filter-circle-outline",
          name: "Lista",
          redirecTo:"/lista"
        },
        {
          icon:"filter-circle-outline",
          name: "Botones flotante",
          redirecTo:"/bfloat"
        },
        
        
     
]
  constructor() { }

  ngOnInit() {
  }

}
