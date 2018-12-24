const authState = {
  register: {
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
  },
  login: {
    email: '',
    password: '',
    rememberMe: false,
  },
  reset_password: {
    password: '',
    passwordConfirmation: '',
    code: '',
  },
  forgot_password: {
    email: '',
  },
};

export default authState;
