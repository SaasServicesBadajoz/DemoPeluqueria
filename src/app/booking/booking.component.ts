import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss',
})
export class BookingComponent {
  hours = Array.from({ length: 21 }, (_, i) => {
    const totalMinutes = (i * 30) + 540;
    const hour = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${String(hour).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  });

  appointment: Omit<Appointment, 'id' | 'createdAt'> = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    people: 1,
    comments: '',
  };

  constructor(private readonly appointmentService: AppointmentService) {}

  submit(): void {
    if (!this.appointment.name || !this.appointment.phone || !this.appointment.date || !this.appointment.time) {
      alert('Completa nombre, teléfono, fecha y hora.');
      return;
    }

    this.appointmentService.addAppointment({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...this.appointment,
      email: this.appointment.email?.trim() || '',
      comments: this.appointment.comments?.trim() || '',
      people: Number(this.appointment.people) || 1,
    });

    alert('Tu cita fue solicitada con éxito.');
    this.resetForm();
  }

  private resetForm(): void {
    this.appointment = {
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      people: 1,
      comments: '',
    };
  }
}
