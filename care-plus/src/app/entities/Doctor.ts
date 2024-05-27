import { Specialty } from "./specialty";
import { Usuario } from "./usuario";

export class Doctor {
    id: number;
    specialty :Specialty;
    address: string;
    birthdate: string;
    dni: string;
    license_num: string;
    name: string;
    phone: string;
    user:Usuario;
    gender : string;
}