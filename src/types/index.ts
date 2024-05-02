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

export type TextFieldVariant = "outlined" | "standard";

export interface BaseTextFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  variant?: TextFieldVariant;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
