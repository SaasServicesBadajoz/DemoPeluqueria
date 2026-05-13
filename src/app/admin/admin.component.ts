import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements OnInit {
  appointments: Appointment[] = [];
  editingId: string | null = null;
  editModel: Appointment | null = null;

  constructor(
    private readonly appointmentService: AppointmentService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('admin-auth') !== 'true') {
      this.router.navigateByUrl('/login');
      return;
    }

    this.refresh();
  }

  refresh(): void {
    this.appointments = this.appointmentService.getAppointments();
  }

  startEdit(appointment: Appointment): void {
    this.editingId = appointment.id;
    this.editModel = { ...appointment };
  }

  saveEdit(): void {
    if (!this.editModel) {
      return;
    }

    this.appointmentService.updateAppointment(this.editModel);
    this.editingId = null;
    this.editModel = null;
    this.refresh();
  }

  deleteAppointment(id: string): void {
    this.appointmentService.deleteAppointment(id);
    if (this.editingId === id) {
      this.editingId = null;
      this.editModel = null;
    }
    this.refresh();
  }
}
