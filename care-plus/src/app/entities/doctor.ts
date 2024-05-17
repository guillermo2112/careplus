export class Doctor {
    id: number;
    specialtyId: number;
    userId: number;
    address: String;
    birthdate: String;
    dni: String;
    licenseNum: number;
    name: String;
    ;

    constructor(id: number,specialtyId: number,userId: number, address: String,birthdate: String,dni: String,licenseNum: number,name: String,phone: String){
        this.id=id;
        this.specialtyId= specialtyId;
        this.userId=userId;
        this.address=address;
        this.birthdate=birthdate;
        this.dni=dni;
        this.licenseNum=licenseNum;
        this.name=name;
        
    }
    
}
