import { Component, OnInit } from '@angular/core';
import { Tecnologia } from '../../../models/tecnologia';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-resumen',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css',
})
export class ResumenComponent implements OnInit {
  tecnologias: Tecnologia[] = [];

  ngOnInit(): void {
    this.tecnologias = [
      {
        nombre: 'Java',
        imagen: '/assets/java.png',
      },
      {
        nombre: 'Python',
        imagen: '/assets/python.png',
      },
      {
        nombre: 'TypeScript',
        imagen: '/assets/typescript.png',
      },
      {
        nombre: 'PHP',
        imagen: '/assets/php.png',
      },
      {
        nombre: 'C#',
        imagen: '/assets/csharp.png',
      },
      {
        nombre: 'Javascript',
        imagen: '/assets/js.png',
      },
      {
        nombre: 'CSS',
        imagen: '/assets/css.png',
      },
      {
        nombre: 'HTML',
        imagen: '/assets/html.png',
      },
    ];
  }
}
