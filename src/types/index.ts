export interface PasswordRules {
  length: number;
  isUpperCase?: boolean;
  isLowerCase?: boolean;
  hasNumber?: boolean;
  hasSymbol?: boolean;
}

export interface ValidPassword {
  valid: boolean;
  password: string;
  message: string;
}
