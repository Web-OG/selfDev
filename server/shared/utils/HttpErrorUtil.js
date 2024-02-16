class HttpError extends Error {
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new HttpError(404, message);
  }

  static internal(message) {
    return new HttpError(500, message);
  }

  static forbidden(message) {
    return new HttpError(403, message);
  }
}

const HttpErrorUtil = (err, res) => {
  if (err instanceof HttpError) {
    return res.status(err.status).json({message: err.message});
  }
  return res.status(500).json({message: 'Непредвиденная ошибка!'});
};

export {HttpError, HttpErrorUtil};