import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss',
})
export class ServicesPageComponent {
  services = [
    'Corte de cabello y peinado',
    'Coloración y balayage',
    'Tratamientos capilares',
    'Manicure y pedicure',
    'Limpieza facial',
    'Maquillaje para eventos',
  ];
}
