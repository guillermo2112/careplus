export class Paciente {
  id:number;
  name: string;
  dni: string;
  usuario: Usuario;

  constructor(id:number=0,name: string = '', dni: string = '', usuario: Usuario = new Usuario()) {
    this.id=id;
    this.name = name;
    this.dni = dni;
    this.usuario = usuario;
  }
}

export class Usuario {
  username: string;
  password: string;
  role: string;

  constructor(username: string = '', password: string = '', role: string = 'PATIENT') {
    this.username = username;
    this.password = password;
    this.role = role;
  }
}
