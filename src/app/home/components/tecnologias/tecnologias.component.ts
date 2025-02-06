import { Component } from '@angular/core';
import { Tecnologia } from '../../../models/tecnologia';

@Component({
  selector: 'app-tecnologias',
  standalone: true,
  imports: [],
  templateUrl: './tecnologias.component.html',
  styleUrl: './tecnologias.component.css',
})
export class TecnologiasComponent {
  tecnologias: Tecnologia[] = [];

  ngOnInit(): void {
    this.tecnologias = [
      {
        nombre: 'Java',
        imagen: 'assets/java.png',
      },
      {
        nombre: 'Python',
        imagen: 'assets/python.png',
      },
      {
        nombre: 'TypeScript',
        imagen: 'assets/typescript.png',
      },
      {
        nombre: 'PHP',
        imagen: 'assets/php.png',
      },
      {
        nombre: 'C#',
        imagen: 'assets/csharp.png',
      },
      {
        nombre: 'Javascript',
        imagen: 'assets/js.png',
      },
      {
        nombre: 'CSS',
        imagen: 'assets/css.png',
      },
      {
        nombre: 'HTML',
        imagen: 'assets/html.png',
      },
    ];
  }
}
