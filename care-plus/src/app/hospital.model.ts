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
/*
export class Hospital {
  id: number;
  name: string;
  address: string;
  pc: number;
  phone: string;
  onDutty: string;
  province: Province;

  constructor(
    id: number,
    name: string,
    address: string,
    pc: number,
    phone: string,
    onDutty: string,
    province: Province
  ) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.pc = pc;
    this.phone = phone;
    this.onDutty = onDutty;
    this.province = province;
  }
}

export class Province {
  id: number;
  name: string;
  onDutty: string;

  constructor(id: number, name: string, onDutty: string) {
    this.id = id;
    this.name = name;
    this.onDutty = onDutty;
  }
}*/
