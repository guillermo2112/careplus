export class Hospital{

    id:number;
    pc:number;
    address:string;
    name:string;
    phone:string;

    constructor(id: number, pc: number, address: string, name: string, phone: string) {
        this.id = id;
        this.pc = pc;
        this.address = address;
        this.name = name;
        this.phone = phone;
      }

}
