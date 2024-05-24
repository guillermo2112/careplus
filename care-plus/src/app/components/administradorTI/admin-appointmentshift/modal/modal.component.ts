import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AppointmentShift } from '../../../../entities/AppointmentShift';
import { AppointmentShiftService } from '../../../../services/appointment-shift.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit{

  appointmentShift: AppointmentShift = new AppointmentShift();


  constructor(
    private appointmentShiftService: AppointmentShiftService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    
  }

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
    });
  }

}
