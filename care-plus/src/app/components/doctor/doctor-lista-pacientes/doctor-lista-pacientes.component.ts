import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Paciente } from '../../../entities/Patient';
import { PacienteService } from '../../../services/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import { HeaderComponent } from "../../shared/header/header.component";
import { ClinicaProfile } from '../../../entities/ClinicaProfile';
import { ClinicasProfileService } from '../../../services/clinicas-profile.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-doctor-lista-pacientes',
  standalone: true,
  templateUrl: './doctor-lista-pacientes.component.html',
  styleUrls: ['./doctor-lista-pacientes.component.css'],
  imports: [
    FormsModule,
    CommonModule,
    DoctorSidebarComponent,
    HeaderComponent
  ]
})
export class DoctorListaPacientesComponent implements OnInit {

  pacientes: Paciente[] = [];
  pacientes_clear: Paciente[] = [];
  perfil: ClinicaProfile = new ClinicaProfile();
  name: string;
  ide: string;
  perfilesExistentes: { [key: number]: Boolean } = {};

  tamañoPag: number = 8;
  paginaActual: number = 1;
  totalPag: number = 1;

  constructor(private paciente_service: PacienteService, private router: Router, private perfilService: ClinicasProfileService, private route: ActivatedRoute,) { }

  async ngOnInit(): Promise<void> {
    const reloadParam = this.route.snapshot.queryParamMap.get('reload');

    if (!reloadParam) {
      // Adding reload parameter and reloading the page
      this.router.navigate([], {
        queryParams: { reload: 'true' },
        queryParamsHandling: 'merge'
      }).then(() => {
        window.location.reload();
      });
    } else {
      // Remove the reload parameter after reloading to avoid infinite reload loop
      this.router.navigate([], {
        queryParams: { reload: null },
        queryParamsHandling: 'merge'
      });
    }
    
    this.obtener_pacientes();
    for (let paciente of this.pacientes) {
      try {
        this.perfilesExistentes[paciente.id] = await this.existeClinicalProfile(paciente.id);
      } catch (error) {
        console.error('Error al comprobar perfil clínico:', error);
        this.perfilesExistentes[paciente.id] = false;
      }
    }
  }

  async existeClinicalProfile(id: number): Promise<Boolean> {
    return await this.perfilService.comprobarPelfilClinico(id);
  }

  obtener_pacientes() {
    this.paciente_service.getPatient().subscribe(dato => {
      this.pacientes = dato;
      this.pacientes_clear = dato;
      // this.existe_clinical_profile(dato);
    })
    this.totalPag = Math.ceil(this.pacientes.length / this.tamañoPag);
    this.paginatePacientes();
  }

  // async existe_clinical_profile(id:number){

  //   let existProfile: boolean = await this.perfilService.comprobarPelfilClinico(id);
  //   console.log(existProfile);
  //   if(existProfile){
  //     return true
  //   }else{
  //     return false;
  //   }
  // }

  async existe_clinical_profile(id: number):Promise<Boolean> {

      let existeDni: Boolean = await this.perfilService.comprobarPelfilClinico(id);

      return existeDni;
  }

  goToClinicalProfile(id: number) {
    this.perfilService.devolverPerfilId(id).subscribe(dato => {
      this.router.navigate(['doctor-clinical-profile', dato]);
    })
  }

  ponerPerfil(id: number) {
    this.paciente_service.getPatientById(id).subscribe(dato => {
      this.perfil.patient = dato;
      this.crearPerfilClinico();
    });
  }

  crearPerfilClinico() {
    this.perfil.date = this.getFormattedDate();
    this.perfil.allergy = '';
    this.perfil.report = '';
    this.perfilService.createClinicasProfile(this.perfil).subscribe(dato => {
      Swal.fire({
        title: "Enorabuena!",
        text: "Perfil clinico creado con exito",
        icon: "success"
      });
      window.location.reload();
    });
  }

  getFormattedDate(): string {
    const now = new Date();
    return this.formatDate(now);
  }

  private formatDate(date: Date): string {
    const pad = (num: number) => num.toString().padStart(2, '0');
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    const hours = pad(date.getHours());
    const minutes = pad(date.getMinutes());
    const seconds = pad(date.getSeconds());
    const milliseconds = date.getMilliseconds().toString().padStart(3, '0');

    const timezoneOffsetMinutes = date.getTimezoneOffset();
    const absTimezoneOffset = Math.abs(timezoneOffsetMinutes);
    const timezoneHours = pad(Math.floor(absTimezoneOffset / 60));
    const timezoneMinutes = pad(absTimezoneOffset % 60);
    const timezoneSign = timezoneOffsetMinutes <= 0 ? '+' : '-';

    const timezoneOffset = `${timezoneSign}${timezoneHours}:${timezoneMinutes}`;

    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}${timezoneOffset}`;
  }

  limpiar_filtros(): void {
    this.pacientes = [...this.pacientes_clear];
    this.name = '';
    this.ide = '';
    this.paginaActual = 1;
    this.totalPag = Math.ceil(this.pacientes.length / this.tamañoPag);
    this.paginatePacientes();
  }

  burcador_id(): void {
    const id = Number(this.ide);

    if (isNaN(id)) {
      Swal.fire({
        title: "Error",
        text: "El ID ingresado no es válido",
        icon: "error"
      });
      return;
    }

    this.pacientes = this.pacientes_clear.filter(Paciente => Paciente.id === id);

    if (this.pacientes.length === 0) {
      Swal.fire({
        title: "Error",
        text: "No se han encontrado doctores con el id buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
    this.totalPag = Math.ceil(this.pacientes.length / this.tamañoPag);
    this.paginaActual = 1;
    this.paginatePacientes();
  }

  burcador_nombre(): void {
    const nombres = this.name.toLowerCase().split(' ');
    this.pacientes = this.pacientes_clear.filter(s => {
      return nombres.every(name => s.name.toLowerCase().includes(name));
    });
    if (this.pacientes.length === 0) {
      Swal.fire({
        title: "Opps...",
        text: "No se han encontrado doctores con el nombre buscado",
        icon: "error"
      });
      this.limpiar_filtros();
    }
    this.totalPag = Math.ceil(this.pacientes.length / this.tamañoPag);
    this.paginaActual = 1;
    this.paginatePacientes();
  }

  paginatePacientes(): void {
    const startIndex = (this.paginaActual - 1) * this.tamañoPag;
    const endIndex = startIndex + this.tamañoPag;
    this.pacientes = this.pacientes_clear.slice(startIndex, endIndex);
  }

  changePage(page: number): void {
    if (page > 0 && page <= this.totalPag) {
      this.paginaActual = page;
      this.paginatePacientes();
    }
  }

  nextPage(): void {
    if (this.paginaActual < this.totalPag) {
      this.paginaActual++;
      this.paginatePacientes();
    }
  }

  previousPage(): void {
    if (this.paginaActual > 0) {
      this.paginaActual--;
      this.paginatePacientes();
    }
  }

  setPage(page: number | string): void {
    if (page !== '...' && +page > -1 && +page <= this.totalPag) {
      this.paginaActual = +page;
      this.paginatePacientes();
    }
  }

  getPages(): (number | string)[] {
    const totalVisiblePages = 5;
    const pages: (number | string)[] = [];
    if (this.totalPag <= totalVisiblePages + 1) {
      for (let i = 1; i <= this.totalPag; i++) {
        pages.push(i);
      }
    } else {
      if (this.paginaActual <= 3) {
        for (let i = 1; i <= totalVisiblePages; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPag);
      } else if (this.paginaActual >= this.totalPag - 2) {
        pages.push(0);
        pages.push('...');
        for (let i = this.totalPag - totalVisiblePages + 1; i <= this.totalPag; i++) {
          pages.push(i);
        }
      } else {
        pages.push(0);
        pages.push('...');
        for (let i = this.paginaActual - 1; i <= this.paginaActual + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(this.totalPag);
      }
    }
    return pages;
  }
}
