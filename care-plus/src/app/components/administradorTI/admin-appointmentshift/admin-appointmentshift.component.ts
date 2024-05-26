import { Component, OnInit } from '@angular/core';
import { AppointmentShift } from '../../../entities/AppointmentShift';
import { AppointmentShiftService } from '../../../services/appointment-shift.service';
import { NavigationExtras, Router } from '@angular/router';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';

@Component({
  selector: 'app-admin-appointmentshift',
  standalone: true,
  templateUrl: './admin-appointmentshift.component.html',
  styleUrl: './admin-appointmentshift.component.css',
  imports: [AdminSidebarComponent],
})
export class AdminAppointmentshiftComponent implements OnInit {
  appointmentshifts: AppointmentShift[] = [];

  constructor(
    private appointmentShiftService: AppointmentShiftService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listAdminAppointmentshift();
  }

  private listAdminAppointmentshift() {
    this.appointmentShiftService.listAppointmentShift().subscribe((dato) => {
      this.appointmentshifts = dato;
    });
  }

  navigateToAddAppointmentshift() {
    this.router.navigate(['/add-appointmentshift']);
  }

  navigateToUpdateAppointmentshift(id: number) {
    const navigationExtras: NavigationExtras = {
      state: {
        appointmentShiftId: id,
      },
    };
    this.router.navigate(['/update-appointmentshift'], navigationExtras);
  }
}
