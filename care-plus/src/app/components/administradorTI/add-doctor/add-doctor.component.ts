import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../entities/doctor';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../entities/usuario';
import { Console } from 'console';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-doctor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent {
  doctor: Doctor = new Doctor();
  usuario : Usuario = new Usuario();

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}


  onSubmit() {
    this.guardarUsuario();
  }
  
  guardarUsuario(){
    this.usuario.role='ROLE_DOCTOR'
    console.log(this.usuario);
    this.doctorService.crear_usuario(this.usuario).subscribe((dato: any) => {
      this.guardarDoctor(dato);
    });
      
  }

  guardarDoctor(usu:Usuario){
    this.doctor.user=usu;
    console.log(this.doctor);
    this.doctorService.createDoctor(this.doctor).subscribe(dato =>{
      Swal.fire({
        title: "Enhorabuena!",
        text: "Doctor creado con exito.",
        icon: "success"
      });
      this.router.navigate(['/doctor']);
    })  
  }
}

