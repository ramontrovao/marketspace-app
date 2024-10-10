import {AxiosError} from 'axios';

type TApiError = {
  status: 'error';
  message: string;
};

interface IAppError {
  statusCode?: number;
  status: string;
  message: string;
}

export class AppError implements IAppError {
  status: string;
  message: string;
  statusCode?: number;

  constructor(error: AxiosError<TApiError>) {
    this.statusCode = error.status;
    this.status = error.response!.data.status;
    this.message = error.response!.data.message;
  }
}
