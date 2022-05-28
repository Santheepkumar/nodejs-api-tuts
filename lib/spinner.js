// https://github.com/usmanyunusov/nanospinner#readme
import { createSpinner } from "nanospinner";

class Spinner {
  constructor() {
    this.spinner = createSpinner();
  }

  start(message) {
    this.spinner.start({
      text: message,
    });
  }

  stop(message = "") {
    this.spinner.stop({
      text: message,
    });
  }

  success(message = "") {
    this.spinner.success({
      text: message,
    });
  }

  warn(message = "") {
    this.spinner.warn({
      text: message,
    });
  }

  error(message = "") {
    this.spinner.error({
      text: message,
    });
  }

  update(message = "") {
    this.spinner.update({
      text: message,
    });
  }
}

export default new Spinner();
