import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from '../../../services/hospital.service';
import { Hospital } from '../../../entities/Hospital';
import { HeaderComponent } from "../../shared/header/header.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
    selector: 'app-clinica-vista',
    standalone: true,
    templateUrl: './clinica-vista.component.html',
    styleUrl: './clinica-vista.component.css',
    imports: [HeaderComponent, NavbarComponent]
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
