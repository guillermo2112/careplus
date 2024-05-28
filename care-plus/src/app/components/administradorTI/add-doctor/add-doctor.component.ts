import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../entities/Doctor';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../entities/usuario';
import Swal from 'sweetalert2';
import { Specialty } from '../../../entities/specialty';
import { SpecialtyService } from '../../../services/specialty.service';

@Component({
  selector: 'app-update-doctor',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-doctor.component.html',
  styleUrl: './add-doctor.component.css'
})
export class AddDoctorComponent implements OnInit{
  doctor: Doctor = new Doctor();
  usuario : Usuario = new Usuario();
  specialties: Specialty[];
  specialty: Specialty = new Specialty();
  confirm_password:string;


  constructor(
    private doctorService: DoctorService,
    private specialityService: SpecialtyService,
    private router: Router
  ) {
    this.doctor.specialty =this.specialty;
    this.confirm_password = "";
  }

  ngOnInit(): void {
    this.specialityService.listSpecialty().subscribe(dato => {
      this.specialties = dato;
    });
    
  }
  async onSubmit() {
    try {
      if (this.usuario.password == "" || this.confirm_password == "") {
        Swal.fire({
          title: "Error!",
          text: "Las contraseñas no pueden estar vacías.",
          icon: "error"
        });
      } else if (this.usuario.password != this.confirm_password) {
        Swal.fire({
          title: "Error!",
          text: "Las contraseñas no coinciden.",
          icon: "error"
        });
      } else {
        let existeDni: Boolean = await this.doctorService.validarDni(this.doctor.dni);
        
        if(existeDni){
          Swal.fire({
            title: "Error!",
            text: "El DNI ya existe.",
            icon: "error"
          });
        } else {
          this.guardarUsuario();
        }
      }
    } catch (error) {
      console.error("Error validando el DNI", error);
    }
  }

  guardarUsuario(){
    this.usuario.role='ROLE_DOCTOR'
    this.doctorService.crear_usuario(this.usuario).subscribe((dato:any) => {
      this.guardarDoctor(dato);
      
    });
    
      
  }

  guardarDoctor(usu:Usuario){
    this.doctor.user = usu;
    this.doctorService.createDoctor(this.doctor).subscribe(dato =>{
      Swal.fire({
        title: "Enhorabuena!",
        text: "Doctor creado con exito.",
        icon: "success"
      });
      this.router.navigate(['/admin-doctor']);
    });
  }
  
}

