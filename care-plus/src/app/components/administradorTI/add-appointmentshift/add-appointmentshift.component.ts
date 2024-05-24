import { Component, OnInit } from '@angular/core';
import { AppointmentShift } from '../../../entities/AppointmentShift';
import { AppointmentShiftService } from '../../../services/appointment-shift.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AdminSidebarComponent } from "../admin-sidebar/admin-sidebar.component";
import Swal from 'sweetalert2';

@Component({
    selector: 'app-add-appointmentshift',
    standalone: true,
    templateUrl: './add-appointmentshift.component.html',
    styleUrl: './add-appointmentshift.component.css',
    imports: [FormsModule, AdminSidebarComponent]
})
export class AddAppointmentshiftComponent implements OnInit{

  appointmentShift: AppointmentShift = new AppointmentShift();

  constructor(
    private appointmentShiftService: AppointmentShiftService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
  }

  onSubmit(){
    console.log("Prueba");
    this.guardarTurno();
  }

  guardarTurno(){
    console.log("llamando servicio");
    this.appointmentShiftService.createAppointmentShift(this.appointmentShift).subscribe((dato:any) => {
      console.log(dato);
      Swal.fire({
        title: "Enhorabuena!",
        text: "Turno creado con éxito.",
        icon: "success"
      });
      this.router.navigate(['/admin-appointmentshift']);
    });
  }


}
