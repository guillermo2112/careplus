import { Component } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HeaderComponent } from "../../shared/header/header.component";


@Component({
    selector: 'app-doctor-calendarios',
    standalone: true,
    templateUrl: './doctor-calendarios.component.html',
    styleUrl: './doctor-calendarios.component.css',
    imports: [DoctorSidebarComponent, FullCalendarModule, HeaderComponent]
})
export class DoctorCalendariosComponent {
    calendarOptions: CalendarOptions = {
        initialView: 'dayGridMonth',
        plugins: [dayGridPlugin, interactionPlugin],
        dateClick: (arg) => this.handleDateClick(arg),
        events: [
          { title: 'event 1', date: '2019-04-01' },
          { title: 'event 2', date: '2019-04-02' }
        ]
      };
    
      handleDateClick(arg: DateClickArg) {
        alert('date click! ' + arg.dateStr)
      }
}
