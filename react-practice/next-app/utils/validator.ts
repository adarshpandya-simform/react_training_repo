// helper fn to validate email
export const isValidEmail = (email: string): Boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (email.toLowerCase().trim().match(emailRegex)) {
    return true;
  } else {
    return false;
  }
};

// helper fn to validate password
export const isValidPassword = (password: string): Boolean => {
  let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,10}$/;

  if (password.match(passwordRegex)) {
    return true;
  } else {
    return false;
  }
};
