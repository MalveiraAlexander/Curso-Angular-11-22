export interface Permission {
  id: number;
  name: string;
  isEnable: boolean;
  deleteAt?: any;
}

export interface Role {
  id: number;
  name: string;
  description: string;
  permissions: Permission[];
}

export interface Device {
  id: number;
  name: string;
  isApp: boolean;
  publicIp: string;
}

export interface Person {
  firstName: string;
  lastName: string;
  dniCuit?: any;
  picture?: any;
  country: string;
  state: string;
  city: string;
  cp: string;
  yearOfBirth: Date;
}

export interface UserResponseModel {
  id: number;
  userName: string;
  email: string;
  phone: string;
  characteristics: any[];
  roles: Role[];
  devices: Device[];
  person: Person;
  createdAt: Date;
  updatedAt: Date;
  lastLogin: Date;
}
