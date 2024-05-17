// import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { SpecialtyService } from '../../../services/specialty.service';
import { Specialty } from '../../../entities/specialty';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-specialty',
  templateUrl: './add-specialty.component.html',
  styleUrls: ['./add-specialty.component.css'],
  standalone : true,
  imports: [FormsModule]
})
export class AddSpecialtyComponent {

  specialty: Specialty = new Specialty();

  constructor(
    private specialtyServicio: SpecialtyService,
    private router: Router
  ) {}

  saveSpecialty() {
    if (!this.specialty.id) {
      console.error("El username es obligatorio.");
      return;
    }

    this.specialtyServicio.createSpecialty(this.specialty).subscribe(
      dato => {
        // console.log(dato);
        // this.goToListaSpecialtys();
        window.location.href = '/specialtys';
      }
      ,
      error => {
        console.log(error);
      }
    );
  }

  goToListaSpecialties() {
    //this.router.navigate(['/specialtys']);
    window.location.href = '/especialidades';
  }

  onSubmit() {
    this.saveSpecialty();
  }

}