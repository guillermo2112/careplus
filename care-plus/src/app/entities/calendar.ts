import { Timestamp } from 'rxjs';
import { Doctor } from './Doctor';
import { Hospital } from './Hospital';
import { Shift } from './shift';

export class Calendar {
  id: number;
  start_date: Date;
  end_date: Date;
  date: Date;
  date_update: Date;
  doctor: Doctor;
  hospital: Hospital;
  shift: Shift;
}
