export class Usuario {
  id:number
  username: string;
  password: string;
  role: string;
  onDutty: string;
  enabled: boolean;

  constructor(
    id:number=0,
    username: string = '',
    password: string = '',
    role: string = 'PATIENT',
    onDutty: string = 'ACTIVE',
    enabled: boolean = true
  ) {
    this.id = id,
    this.username = username;
    this.password = password;
    this.role = role;
    this.onDutty = onDutty;
    this.enabled = enabled;
  }
}

