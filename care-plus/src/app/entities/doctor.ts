import { Usuario } from "./usuario";

export class Doctor {
    id: number;
    specialtyId: number;
    userId: number;
    address: String;
    birthdate: String;
    dni: String;
    licenseNum: string;
    name: String;
    phone: String;
    user:Usuario;

    constructor(
        id: number = 0,
        specialtyId: number = 0,
        userId: number = 0,
        address: string = '',
        birthdate: string = '',
        dni: string = '',
        licenseNum: string = '',
        name: string = '',
        phone: string = '',
        user: Usuario = new Usuario()
    ) {
        this.id = id;
        this.specialtyId = specialtyId;
        this.userId = userId;
        this.address = address;
        this.birthdate = birthdate;
        this.dni = dni;
        this.licenseNum = licenseNum;
        this.name = name;
        this.phone = phone;
        this.user = user;
    }
    
}
