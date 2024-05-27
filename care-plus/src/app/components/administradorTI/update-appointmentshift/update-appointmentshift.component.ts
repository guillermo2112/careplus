import { Component, OnInit } from '@angular/core';
import { AppointmentShift } from '../../../entities/AppointmentShift';
import { AppointmentShiftService } from '../../../services/appointment-shift.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-appointmentshift',
  standalone: true,
  templateUrl: './update-appointmentshift.component.html',
  styleUrl: './update-appointmentshift.component.css',
  imports: [AdminSidebarComponent, FormsModule],
})
export class UpdateAppointmentshiftComponent implements OnInit {
  appointmentShift: AppointmentShift = new AppointmentShift();

  constructor(
    private appointmentShiftService: AppointmentShiftService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.appointmentShift.id = history.state.appointmentShiftId;
    this.obtenerIdTurno();
  }

  actualizarTurno() {
    this.appointmentShiftService
      .updateAppointmentShift(this.appointmentShift.id, this.appointmentShift)
      .subscribe((dato: any) => {
        Swal.fire({
          title: 'Enhorabuena!',
          text: 'Turno actualizado con éxito.',
          icon: 'success',
        });
        this.router.navigate(['/admin-appointmentshift']);
      });
  }

  obtenerIdTurno() {
    this.appointmentShiftService
      .getAppointmentShiftID(this.appointmentShift.id)
      .subscribe((dato: any) => {
        console.log('GET: ', dato);
        this.appointmentShift = dato;
      });
  }
}
