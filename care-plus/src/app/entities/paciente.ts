import { Usuario } from "./usuario";


export class Paciente {
  name: string;
  dni: string;
  birthdate: string;
  address: string;
  phone: string;
  emergency_phone: string;
  id_user: Usuario;
  gender: string;

  constructor(
    name: string = '',
    dni: string = '',
    birthdate: string = '',
    address: string = '',
    phone: string = '',
    emergency_phone: string = '',
    gender: string = '',
    id_user: Usuario = new Usuario()
  ) {
    this.name = name;
    this.dni = dni;
    this.birthdate = birthdate;
    this.address = address;
    this.phone = phone;
    this.gender=gender;
    this.emergency_phone = emergency_phone;
    this.id_user = id_user;
  }
}
