import { OnDutty } from "./OnDutty";

export class Hospital {
  id: number;
  name: string;
  address: string;
  pc: number;
  phone: string;
  onDutty: OnDutty;
  province: Province;

  // constructor(
  //   id: number,
  //   name: string,
  //   address: string,
  //   pc: number,
  //   phone: string,
  //   onDutty: string,
  //   province: Province
  // ) {
  //   this.id = id;
  //   this.name = name;
  //   this.address = address;
  //   this.pc = pc;
  //   this.phone = phone;
  //   this.onDutty = onDutty;
  //   this.province = province;
  // }
}

export class Province {
  id: number;
  name: string;
  onDutty: OnDutty;

}