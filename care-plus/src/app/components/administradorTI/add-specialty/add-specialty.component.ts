// import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SpecialtyService } from '../../../services/specialty.service';
import { Specialty } from '../../../entities/specialty';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
import { HeaderComponent } from "../../shared/header/header.component";

@Component({
    selector: 'app-add-specialty',
    templateUrl: './add-specialty.component.html',
    styleUrls: ['./add-specialty.component.css'],
    standalone: true,
    imports: [FormsModule, HeaderComponent]
})
export class AddSpecialtyComponent {

  specialty: Specialty = new Specialty();

  constructor(
    private specialtyServicio: SpecialtyService,
    private router: Router
  ) {}

  saveSpecialty() {
    if (!this.specialty.name) {
      console.error("El nombre es obligatorio.");
      return;
    }

    this.specialtyServicio.createSpecialty(this.specialty).subscribe(
      dato => {
        Swal.fire({
          title: "Success",
          text: "Especilidad actualizada con éxito",
          icon: "success"
        }).then(() => {
            this.goToListaSpecialties();
          
        });
      }
    );
  }

  goToListaSpecialties() {
    //this.router.navigate(['/specialtys']);
    window.location.href = '../admin-especialidades';
  }

  onSubmit() {
    this.saveSpecialty();
  }

}