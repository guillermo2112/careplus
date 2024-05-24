import { Specialty } from "./specialty";
import { Usuario } from "./usuario";

export class Doctor {
    id: number;
    specialty :Specialty;
    address: String;
    birthdate: String;
    dni: String;
    license_num: String;
    name: String;
    phone: String;
    user:Usuario;
    gender : String;
}