import { Usuario } from "./usuario";

export class Paciente {
  id:number;
  name: string;
  dni: string;
  birthdate: string;
  address: string;
  phone: string;
  emergency_phone: string;
  usuario: Usuario;

  constructor(
    id:number=0,
    name: string = '',
    dni: string = '',
    birthdate: string = '',
    address: string = '',
    phone: string = '',
    emergency_phone: string = '',
    usuario: Usuario = new Usuario()
  ) {
    this.id=id;
    this.name = name;
    this.dni = dni;
    this.birthdate = birthdate;
    this.address = address;
    this.phone = phone;
    this.emergency_phone = emergency_phone;
    this.usuario = usuario;
  }
}

