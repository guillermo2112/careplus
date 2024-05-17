import { Component, OnInit, inject } from '@angular/core';
import { DoctorService } from '../../doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from '../../doctor';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-doctor',
  standalone: true,
  imports: [],
  templateUrl: './update-doctor.component.html',
  styleUrl: './update-doctor.component.css'
})
export class UpdateDoctorComponent implements OnInit{
  


  // Inyectar FormBuilder para la creación de formularios
 private fb = inject(FormBuilder);
 
 // Inyectar Router para la navegación
 private router = inject(Router);
 
 // Inyectar ActivatedRoute para acceder a los parámetros de la URL
 private route = inject(ActivatedRoute);
 
 // Inyectar el servicio de clientes
 private clienteService = inject(DoctorService);
 
 // Definir variables para el formulario, el cliente y los errores
 form?: FormGroup;
 doctor?: Doctor;
 error: string[] = [];
 
 
 ngOnInit(): void {
   // Obtener el ID del cliente de los parámetros de la URL
 
   const id = this.route.snapshot.paramMap.get('id');
   
   // Si hay un ID, cargar los datos del cliente existente para editar
//    if (id) {
//      this.DoctorService.getClientesId(parseInt(id)).subscribe(doctor => {
//        this.doctor = doctor;
//        // Crear el formulario con los datos del cliente cargados
//        this.form = this.fb.group({


//          id: [doctor.id, Validators.required],
//          specialtyId: [doctor.specialtyId, [Validators.required, Validators.specialtyId]],
//          userId: [doctor.userId, Validators.required],
//          address: [doctor.address, Validators.required],
//          birthdate: [doctor.birthdate],
//          dni: [doctor.dni],
//          licenseNum: [doctor.licenseNum, Validators.required],
//          name: [doctor.name, Validators.required],

//        });
//      });
//    } else {
//      // Si no hay un ID, crear un nuevo formulario vacío para agregar un nuevo cliente
//      this.form = this.fb.group({
//        id: ['', Validators.required],
//        specialtyId: ['', [Validators.required, Validators.email]],
//        userId: ['', Validators.required],
//        address: ['', Validators.required],
//        birthdate: [''],
//        dni: [''],
//        licenseNum: [''],
//        name: ['']
//      });
//    }
//  }
 
//  // Método para guardar el cliente
//  guardar() {
//    // Validar el formulario
//    if (this.form!.invalid) {
//      this.form?.markAllAsTouched();
//      return;
//    }
 
//    let request: Observable<Doctor>;
 
//    // Obtener los datos del formulario
//    const clienteForm = this.form!.value;
//    // Si hay un cliente existente, actualizarlo; de lo contrario, crear uno nuevo
//    if (this.cliente) {
//      request = this.clienteService.updateCliente(clienteForm, this.cliente.idCliente);
//    } else {
//      request = this.clienteService.createCliente(clienteForm);
//    }
 
//    // Realizar la solicitud al servidor
//    request.subscribe({
//      next: () => {
//        // Navegar de regreso a la lista de clientes después de guardar
//        this.router.navigate(['/clientes']);
//      },
//      error: response => {
//        // Manejar los errores de la solicitud
//        this.error = response.error.error;
//      }
//    });
//  }
 }
}
