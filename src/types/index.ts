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

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export type IconType = (props: IconBaseProps) => JSX.Element;

export interface BaseTextFieldProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  type?: string;
  placeholder?: string;
  variant?: TextFieldVariant;
  startIcon?: React.ReactNode | JSX.Element | IconType;
  endIcon?: React.ReactNode | JSX.Element | IconType;
}
