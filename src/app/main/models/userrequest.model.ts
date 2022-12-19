export class Person2 {
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

export class Characteristic2 {
    name: string;
    value: string;
    canToken: boolean;
}

export class UserRequestModel2 {
    userName: string;
    email: string;
    phone: string;
    person: Person2;
    characteristics: Characteristic2[];
}
