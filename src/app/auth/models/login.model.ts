export class LoginRequestModel {
  username: string;
  password: string;
  cookie: string;
  deviceName: string;
  isApp: boolean;
  publicIP: string;
}


export class LoginResponseModel {
  token: string;
  refreshToken: string;
  expiresIn: Date;
}
