import { Usuario } from "./usuario";

export class Doctor {
    id: number;
    specialty :{
        id:number;
        name: String;
    };
    userId: number;
    address: String;
    birthdate: String;
    dni: String;
    license_num: String;
    name: String;
    phone: String;
    user:Usuario;
    gender : String;

    // constructor(
    //     id: number = 0,
    //     specialtyId: number = 0,
    //     userId: number = 0,
    //     address: String = '',
    //     birthdate: String = '',
    //     dni: String = '',
    //     licenseNum: String = '',
    //     name: String = '',
    //     phone: String = '',
    //     gender: String = '',
    //     user: Usuario = new Usuario()
    // ) {
    //     this.id = id;
    //     this.userId = userId;
    //     this.address = address;
    //     this.birthdate = birthdate;
    //     this.dni = dni;
    //     this.licenseNum = licenseNum;
    //     this.name = name;
    //     this.phone = phone;
    //     this.gender=gender;
    //     this.user = user;
    // }
    
}
