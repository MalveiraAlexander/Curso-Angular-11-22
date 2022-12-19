export class Person {
  firstName: string;
  lastName: string;
  dniCuit: string;
  picture: string;
  country: string;
  state: string;
  city: string;
  cp: string;
  yearOfBirth: Date;
}

export class Characteristic {
  name: string;
  value: string;
  canToken: boolean;
}

export class UserRequestModel {
  userName: string;
  email: string;
  phone: string;
  password: string;
  person: Person;
  characteristics: Characteristic[];
}

