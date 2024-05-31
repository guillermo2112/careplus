import { Component, OnInit } from '@angular/core';
import { DoctorSidebarComponent } from "../doctor-sidebar/doctor-sidebar.component";
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { DoctorService } from '../../../services/doctor.service';
import { Usuario } from '../../../entities/usuario';
import { Doctor } from '../../../entities/Doctor';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-doctor-profile',
    standalone: true,
    templateUrl: './doctor-profile.component.html',
    styleUrl: './doctor-profile.component.css',
    imports: [DoctorSidebarComponent,
        RouterModule, HeaderComponent]
})
export class DoctorProfileComponent implements OnInit{

    user: Usuario = new Usuario();

    doctor: Doctor = {
        id: 0,
        specialty: {
            id: 0,
            name: ''
        },
        address: '',
        birthdate: '',
        dni: '',
        license_num: '',
        name: '',
        phone: '',
        user: this.user,
        gender: ''
    };

    usuario:any;
    
    constructor(private userService: UserService,  private router: Router, private doctorService: DoctorService) { }

    ngOnInit(): void {
        this.user.username = history.state.doctorusername;
        this.user.id=history.state.doctorid;
        this.usuario=sessionStorage.getItem("usernameid");
        this.getDoctor(this.usuario);
    }

    editarFoto(){
        this.router.navigate(['/ima']);
    }

    getDoctor(id:number){
    this.doctorService
    .getDoctorByUser(id)
    .subscribe((data)=>{
    this.doctor=data;
   
    })
}
}
