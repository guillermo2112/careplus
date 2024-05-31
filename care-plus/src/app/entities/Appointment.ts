import { AppointmentShift } from "./AppointmentShift";
import { Calendar } from "./calendar";
import { Paciente } from "./Patient";
import { State } from "./State";

export class Appointment {
  id: number;
  date: Date;
  report: string;
  on_history: boolean;
  prescription: string;
  state: State;
  appointment_shift: AppointmentShift;
  patient: Paciente;
  calendar: Calendar;
}