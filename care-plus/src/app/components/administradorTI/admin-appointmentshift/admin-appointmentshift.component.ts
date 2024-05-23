import { Component, OnInit } from '@angular/core';
import { HomeAdminComponent } from "../home-admin/home-admin.component";
import { AppointmentShift } from '../../../entities/AppointmentShift';
import { AppointmentShiftService } from '../../../services/appointment-shift.service';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-admin-appointmentshift',
    standalone: true,
    templateUrl: './admin-appointmentshift.component.html',
    styleUrl: './admin-appointmentshift.component.css',
    imports: [HomeAdminComponent]
})
export class AdminAppointmentshiftComponent implements OnInit {

    isModalOpen = false;
    form: FormGroup;

    appointmentshifts: AppointmentShift[] = [];

    constructor(
        private appointmentShiftService: AppointmentShiftService,
        private router: Router,
        private fb: FormBuilder
      ) {
        this.form = this.fb.group({
            input1: ['', Validators.required],
            input2: ['', Validators.required]
          });
      }

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

    openDialog() {
        this.isModalOpen = true;
      }
    
      closeDialog() {
        this.isModalOpen = false;
      }
    
      onSubmit() {
        if (this.form.valid) {
          console.log('Form Submitted', this.form.value);
          this.closeDialog(); // Cerrar el modal después de enviar el formulario
        }
      }

}
