export enum CRITERION {
  MIN_LENGTH = "minLength",
  LOWER_CASE = "lowerCase",
  UPPER_CASE = "upperCase",
  NUMBER = "number",
  SYMBOL = "symbol",
}

export interface ConditionPassed {
  [CRITERION.MIN_LENGTH]: boolean;
  [CRITERION.LOWER_CASE]: boolean;
  [CRITERION.UPPER_CASE]: boolean;
  [CRITERION.NUMBER]: boolean;
  [CRITERION.SYMBOL]: boolean;
}

export interface PasswordRules {
  length?: number;
  isLowerCase?: boolean;
  isUpperCase?: boolean;
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
  className?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  variant?: TextFieldVariant;
  endIcon?: React.ReactNode | JSX.Element | IconType;
  readOnly?: boolean;
}

export enum StrengthType {
  WEAK = "weak",
  NORMAL = "normal",
  STRONG = "strong",
}
