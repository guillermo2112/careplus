import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../../services/hospital.service';
import { Hospital } from '../../entities/hospital.model';

@Component({
  selector: 'app-clinica-vista',
  standalone: true,
  imports: [],
  templateUrl: './clinica-vista.component.html',
  styleUrl: './clinica-vista.component.css'
})
export class ClinicaVistaComponent implements OnInit{

  id:number;
  hospital:any;

  constructor(private router:ActivatedRoute,private hospital_servicio:HospitalService,private route:Router){}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.hospital_servicio.obtener_hospital_id(this.id).subscribe(dato =>{
      this.hospital = dato;
    })
  }

  volver_clinicas(){
    this.route.navigate(['clinicas']);
  }
}
