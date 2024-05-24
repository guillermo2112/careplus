import { Usuario } from "./usuario";

export class Paciente {
  id: number;
  name: string;
  dni: string;
  birthdate: string;
  address: string;
  phone: string;
  emergency_phone: string;
  user: Usuario;
  gender: string;

  
}
