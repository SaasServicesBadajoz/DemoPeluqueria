export interface Appointment {
  id: string;
  name: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  people: number;
  comments?: string;
  createdAt: string;
}
