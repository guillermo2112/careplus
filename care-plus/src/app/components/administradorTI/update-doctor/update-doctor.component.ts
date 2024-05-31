import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../../services/doctor.service';
import { Doctor } from '../../../entities/Doctor';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { Specialty } from '../../../entities/specialty';
import { SpecialtyService } from '../../../services/specialty.service';
import { NgSelectModule } from '@ng-select/ng-select';
import { Usuario } from '../../../entities/usuario';
import { OnDutty } from '../../../entities/OnDutty';
import { UploadService } from '../../../services/upload.service';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update-doctor',
  standalone: true,
  imports: [FormsModule, NgSelectModule, NgxDropzoneModule, CommonModule],
  templateUrl: './update-doctor.component.html',
  styleUrl: './update-doctor.component.css',
})
export class UpdateDoctorComponent implements OnInit {
  id: number;
  doctor: Doctor = new Doctor();
  specialty: Specialty = new Specialty();
  specialties: Specialty[] = [];
  doctorId: number;
  usuario: Usuario = new Usuario();
  users: Usuario[] = [];

  onDuttyArray = [
    { id: 1, value: OnDutty.ACTIVE, label: 'ACTIVE' },
    { id: 2, value: OnDutty.INACTIVE, label: 'INACTIVE' },
    { id: 3, value: OnDutty.SUSPENDED, label: 'SUSPENDED' },
  ];
  selectedOnDutty :any  ;

  constructor(
    private doctorService: DoctorService,
    private specialityService: SpecialtyService,
    private route: ActivatedRoute,
    private router: Router,
    private uploadService: UploadService
  ) {
    this.doctor = new Doctor();
  }

  files: File[] = [];


  ngOnInit(): void {
    this.doctorId = history.state.doctorId;
    this.doctor.specialty = this.specialty;
    this.doctor.user = this.usuario;
    this.id = this.route.snapshot.params['id'];
    this.infoDoctor();
    this.findSpecialties();
    console.log();
  }

  infoDoctor() {
    this.doctorService.getDoctorId(this.doctorId).subscribe((data) => {
      this.doctor = data;
      this.selectedOnDutty = this.doctor.user.onDutty;
      this.doctorId = data.id;
    });
  }
  

  findSpecialties() {
    this.specialityService.listSpecialty().subscribe((data) => {
      this.specialties = data;
    });
  }

  saveDoctor() {
    this.specialityService
      .getSpecialtyById(this.doctor.specialty.id)
      .subscribe((specialty) => {
        this.doctor.specialty = specialty;
        this.doctor.user.onDutty = this.selectedOnDutty;

        this.doctorService
          .updateDoctor(this.doctorId, this.doctor)
          .subscribe((dato) => {
            Swal.fire({
              title: 'Success',
              text: 'Doctor actualizado con éxito',
              icon: 'success',
            }).then(() => {
              this.goToListDoctor();
            });
          });
      });
  }

  goToListDoctor() {
    this.router.navigate(['/admin-doctor']);
  }

  onSelect(event: any) {
    console.log(event);
    const validFiles = event.addedFiles.filter((file: File) => file.type === 'image/jpeg');
    if (validFiles.length !== event.addedFiles.length) {
      alert('Solo se pueden subir archivos .jpg');
    } else {
      this.files = validFiles;
    }
  }

  onRemove(event: any) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  uploadImage(doctorId: number) {
    if (this.files.length === 0) return false;

    const fileData = this.files[0];

    const data = new FormData();
    data.append('file', fileData);
    data.append('upload_preset', 'cloudinary-images');
    data.append('cloud_name', 'dxltzkffz');
    data.append('public_id', doctorId.toString()); // Usar doctorId como public_id

    this.uploadService.uploadImg(data).subscribe({
      next: (response: any) => {
        console.log(response);
        alert('Imagen subida exitosamente');
      },
      error: (error: any) => {
        console.log('Error status:', error.status);
        console.log('Error message:', error.message);
        console.log('Error body:', error.error);
      }
    });
    return true;
  }

  onSubmit() {
    this.saveDoctor();
  }
}