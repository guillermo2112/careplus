import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../entities/doctor';
import { FormsModule } from '@angular/forms';
import { Usuario } from '../../../entities/usuario';
import { Console } from 'console';
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

  constructor(
    private doctorService: DoctorService,
    private specialityService: SpecialtyService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.doctor.specialty =this.specialty;
  }

  ngOnInit(): void {
    this.specialityService.listSpecialty().subscribe(dato => {
      this.specialties = dato;
    });
  }
  async onSubmit() {
    try {
        let existeDni: Boolean = await this.doctorService.validarDni(this.doctor.dni);
        console.log("Existe DNI: " + existeDni);
        console.log("Typo DNI: " + typeof existeDni);

        if(existeDni){
            Swal.fire({
                title: "Error!",
                text: "El DNI ya existe.",
                icon: "error"
            });
            console.log("DNI ya existe");
        } else {
            this.guardarUsuario();
            console.log("DNI no existe");
        }
    } catch (error) {
        console.error("Error validando el DNI", error);
    }
}

  guardarUsuario(){
    this.usuario.role='ROLE_DOCTOR'
    console.log(this.usuario);
    this.doctorService.crear_usuario(this.usuario).subscribe((dato:any) => {
      console.log(dato);
      this.guardarDoctor(dato);
      
    });
    
      
  }

  guardarDoctor(usu:Usuario){
    this.doctor.user = usu;
    console.log(this.doctor);
    this.doctorService.createDoctor(this.doctor).subscribe(dato =>{
      console.log(dato);
      Swal.fire({
        title: "Enhorabuena!",
        text: "Doctor creado con exito.",
        icon: "success"
      });
      this.router.navigate(['/doctor']);
    });
  }
  
}

