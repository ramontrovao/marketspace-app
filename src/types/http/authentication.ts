import {TUser} from '../user';

export namespace LoginService {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    token: string;
    user: TUser;
    'refresh-token': string;
  };
}

export namespace RegisterService {
  export type Params = FormData;

  export type Result = undefined;
}

export namespace RefreshTokenService {
  export type Params = undefined;

  export type Result = {
    token: string;
  };
}
