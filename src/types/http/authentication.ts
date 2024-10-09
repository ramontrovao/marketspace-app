import {TUser} from '../user';

export namespace LoginService {
  export type Params = {
    email: string;
    password: string;
  };

  export type Result = {
    token: string;
    user: TUser;
    refresh_token: string;
  };
}
