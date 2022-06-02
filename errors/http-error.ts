export class HttpError {
  message: string;
  status: number;

  constructor(status = 500, message: string) {
    this.message = message;
    this.status = status;
  }
}
