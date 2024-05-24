import { Component, OnInit } from '@angular/core';
import { Calendar } from '../../../entities/calendar';
import { NavigationExtras, Router } from '@angular/router';
import { CalendarService } from '../../../services/calendar.service';
import { HomeAdminComponent } from '../home-admin/home-admin.component';
import { CommonModule, DatePipe } from '@angular/common'; 

@Component({
    selector: 'app-admin-calendar',
    standalone: true,
    templateUrl: './admin-calendar.component.html',
    styleUrls: ['./admin-calendar.component.css'],
    imports: [HomeAdminComponent, CommonModule],
    providers:[DatePipe]
})
export class AdminCalendarComponent implements OnInit {

  calendarios: Calendar[] = [];
  constructor(
    private calendarService: CalendarService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  listCalendar() {
    this.calendarService.listCalendar().subscribe(dato => {
      this.calendarios = dato;
    });
  }

  navigateToAddCalendar() {
    this.router.navigate(['/add-calendar']);
  }

  navigateToUpdateCalendar(id:number) {
    const navigationExtras: NavigationExtras = {
      state: {
        calendarId: id
      }
    };
    this.router.navigate(['/update-calendar'], navigationExtras);
  }

  formatDate(date: Date): any {
    return this.datePipe.transform(date, 'yyyy-MM-dd HH:mm');
  }

  ngOnInit(): void {
    this.listCalendar();
  }
}
