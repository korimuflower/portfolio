function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} が未設定です`);
  }
  return value;
}

export function premiumAccount() {
  return {
    email: getEnv('LOGIN_EMAIL_PREMIUM'),
    password: getEnv('LOGIN_PASSWORD_PREMIUM'),
  };
}

export function generalAccount() {
  return {
    email: getEnv('LOGIN_EMAIL_GENERAL'),
    password: getEnv('LOGIN_PASSWORD_GENERAL'),
  };
}