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


    // constructor(
    //     address: String = '',
    //     birthdate: String = '',
    //     dni: String = '',
    //     license_num: String = '',
    //     name: String = '',
    //     phone: String = '',
    //     gender: String = '',
    //     user: Usuario = new Usuario(),
    //     specialty: {id: number, name: String} = {id: 0, name: ''}
    // ) {
    //     this.address = address;
    //     this.birthdate = birthdate;
    //     this.dni = dni;
    //     this.license_num = license_num;
    //     this.name = name;
    //     this.phone = phone;
    //     this.gender=gender;
    //     this.user = user;
    //     this.specialty = specialty;
    // }
    
}