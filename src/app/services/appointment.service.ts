import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Appointment } from '../models/appointment.model';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
  private readonly storageKey = 'estetica_appointments';
  private readonly platformId = inject(PLATFORM_ID);

  private get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  getAppointments(): Appointment[] {
    if (!this.isBrowser) {
      return [];
    }

    const raw = localStorage.getItem(this.storageKey);
    if (!raw) {
      return [];
    }

    try {
      return JSON.parse(raw) as Appointment[];
    } catch {
      return [];
    }
  }

  saveAppointments(appointments: Appointment[]): void {
    if (!this.isBrowser) {
      return;
    }

    localStorage.setItem(this.storageKey, JSON.stringify(appointments));
  }

  addAppointment(appointment: Appointment): void {
    const appointments = this.getAppointments();
    appointments.unshift(appointment);
    this.saveAppointments(appointments);
  }

  updateAppointment(appointment: Appointment): void {
    const appointments = this.getAppointments().map((item) =>
      item.id === appointment.id ? appointment : item,
    );
    this.saveAppointments(appointments);
  }

  deleteAppointment(id: string): void {
    const appointments = this.getAppointments().filter((item) => item.id !== id);
    this.saveAppointments(appointments);
  }
}
