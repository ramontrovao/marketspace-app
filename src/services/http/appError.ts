import {AxiosError} from 'axios';

type TApiError = {
  status: 'error';
  message: string;
};

interface IAppError {
  statusCode?: number;
  status: string | undefined;
  message: string;
}

export class AppError implements IAppError {
  status: string | undefined;
  message: string;
  statusCode?: number;

  constructor(
    error: AxiosError<TApiError> | {status: number; message: string},
  ) {
    this.statusCode = error.status;
    this.status =
      error instanceof AxiosError ? error.response?.data.status : undefined;
    this.message =
      error instanceof AxiosError
        ? error.response!.data.message
        : error.message;
  }
}
