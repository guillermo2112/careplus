import { Component, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { AppointmentShift } from '../../../entities/AppointmentShift';
import { AppointmentShiftService } from '../../../services/appointment-shift.service';
import { NavigationExtras, Router } from '@angular/router';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import { Subject } from 'rxjs';
import { Config } from 'datatables.net';

@Component({
  selector: 'app-admin-appointmentshift',
  standalone: true,
  templateUrl: './admin-appointmentshift.component.html',
  styleUrl: './admin-appointmentshift.component.css',
  imports: [AdminSidebarComponent, DataTablesModule],
})
export class AdminAppointmentshiftComponent implements OnInit {
  appointmentshifts: AppointmentShift[] = [];
  //appointmentshifts!: AppointmentShift[];

  //doctortlist!:doctor[]
  dtoptions:Config={}
  dttrigger:Subject<any>=new Subject<any>();

  constructor(
    private appointmentShiftService: AppointmentShiftService,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadAppointmentshift();
    this.dtoptions={
      pagingType:'full_numbers',
      lengthMenu:[5,15,20,25],
      // pageLength:8
      // paging:false,
      // ordering:false,
      // searching:false
      order:[2,'asc'],
      // lengthChange:false
      // scrollY:'300',
      language:{
        searchPlaceholder:'Buscar Turno'
      }
    }
  }

  

  private listAdminAppointmentshift() {
    this.appointmentShiftService.listAppointmentShift().subscribe((dato) => {
      this.appointmentshifts = dato;
    });
  }

  loadAppointmentshift(){
    this.appointmentShiftService.listAppointmentShift().subscribe(item=>{
      this.appointmentshifts=item;
      this.dttrigger.next(null);
    })
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
