export class Paciente {
  id: number;
  name: string;
  dni: string;
  birthdate: string;
  address: string;
  phone: string;
  emergency_phone: string;
  usuario: Usuario;

  constructor(
    id: number = 0,
    name: string = '',
    dni: string = '',
    birthdate: string = '',
    address: string = '',
    phone: string = '',
    emergency_phone: string = '',
    usuario: Usuario = new Usuario()
  ) {
    this.id = id;
    this.name = name;
    this.dni = dni;
    this.birthdate = birthdate;
    this.address = address;
    this.phone = phone;
    this.emergency_phone = emergency_phone;
    this.usuario = usuario;
  }
}

export class Usuario {
  id: number;
  username: string;
  password: string;
  role: string;
  onDutty: string;
  enabled: boolean;

  constructor(
    id: number = 0,
    username: string = '',
    password: string = '',
    role: string = 'PATIENT',
    onDutty: string = 'ACTIVE',
    enabled: boolean = true
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.role = role;
    this.onDutty = onDutty;
    this.enabled = enabled;
  }
}
