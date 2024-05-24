import { Component, OnInit } from '@angular/core';
import { HomeAdminComponent } from "../admin-sidebar/admin-sidebar.component";
import { AppointmentShift } from '../../../entities/AppointmentShift';
import { AppointmentShiftService } from '../../../services/appointment-shift.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';

@Component({
    selector: 'app-admin-appointmentshift',
    standalone: true,
    templateUrl: './admin-appointmentshift.component.html',
    styleUrl: './admin-appointmentshift.component.css',
    imports: [HomeAdminComponent, ModalComponent]
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
        //console.log("Tester");
        this.appointmentShiftService.listAppointmentShift().subscribe(dato => {
          this.appointmentshifts = dato;
          //console.log("Doctores: ",this.appointmentshifts);
        });
    }

    

}
