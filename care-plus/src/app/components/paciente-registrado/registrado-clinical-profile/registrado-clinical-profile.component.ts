import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { Usuario } from '../../../entities/usuario';
import { Paciente } from '../../../entities/Patient';
import { ClinicasProfileService } from '../../../services/clinicas-profile.service';
import { ClinicaProfile } from '../../../entities/ClinicaProfile';

@Component({
  selector: 'app-registrado-clinical-profile',
  standalone: true,
  imports: [],
  templateUrl: './registrado-clinical-profile.component.html',
  styleUrl: './registrado-clinical-profile.component.css'
})
export class RegistradoClinicalProfileComponent implements OnInit {

  user: Usuario = new Usuario();

  paciente: Paciente = {
    id: 0,
    name: '',
    dni: '',
    birthdate: '',
    address: '',
    phone: '',
    emergency_phone: '',
    user: this.user, 
    gender: ''
};

  perfil: ClinicaProfile=new ClinicaProfile();

  usuario:any;

  pacienteid:any;

  constructor(private userService: UserService,  private router: Router, private pacienteService: PacienteService, private perfilClinicoService:ClinicasProfileService) { }
  ngOnInit(): void {
    this.usuario=sessionStorage.getItem("usernameid");
    this.getPatient(this.usuario);
  }

  getPatient(id:number){
    this.pacienteService.getPatientByUser(id).subscribe(
        data=>{
          this.pacienteid=data.id;
            this.paciente=data;
          this.perfilClinicoService.clinicalProfileByPatientId(data.id).subscribe(
            data=>{
              this.perfil=data;
            }
          )

        })
    }

}
