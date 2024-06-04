import { Component, OnInit } from '@angular/core';
import { RegistradoSidebarComponent } from "../registrado-sidebar/registrado-sidebar.component";
import { Usuario } from '../../../entities/usuario';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { Paciente } from '../../../entities/Patient';
import { HeaderComponent } from "../../shared/header/header.component";
import { RegistradoClinicalProfileComponent } from '../registrado-clinical-profile/registrado-clinical-profile.component';

@Component({
    selector: 'app-registrado-profile',
    standalone: true,
    templateUrl: './registrado-profile.component.html',
    styleUrl: './registrado-profile.component.css',
    imports: [RegistradoSidebarComponent, HeaderComponent, RegistradoClinicalProfileComponent]
})
export class RegistradoProfileComponent implements OnInit {

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

    usuario:any;

    constructor(private userService: UserService,  private router: Router, private pacienteService: PacienteService) { }

    ngOnInit(): void {
        this.user.username = history.state.patientusername;
        this.user.id=history.state.patientusername;
        this.usuario=sessionStorage.getItem("usernameid");
        this.getPatient(this.usuario);
    }

    getPatient(id:number){
        this.pacienteService.getPatientByUser(id).subscribe(
            data=>{
                this.paciente=data;
                console.log('Patient user:', this.paciente.user); // Check if user is populated

            })
        }



}
