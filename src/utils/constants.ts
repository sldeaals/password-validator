import { CRITERION } from "../types";

export const MIN_LEN = 8;
export const MAX_LENGTH = 24;

export const MIN_LENGTH = /^.{8,}$/g;
export const LOWER_CASE_REGEX = /[a-z]/g;
export const UPPER_CASE_REGEX = /[A-Z]/g;
export const NUMBER_REGEX = /[0-9]/g;
export const SYMBOL_REGEX = /[~!@#$%^&*()]/g;

export const RULES = {
  [CRITERION.MIN_LENGTH]: MIN_LENGTH,
  [CRITERION.LOWER_CASE]: LOWER_CASE_REGEX,
  [CRITERION.UPPER_CASE]: UPPER_CASE_REGEX,
  [CRITERION.NUMBER]: NUMBER_REGEX,
  [CRITERION.SYMBOL]: SYMBOL_REGEX,
};

export const RULES_MESSAGES = {
  [CRITERION.MIN_LENGTH]: "Must be a minimum of 8 characters",
  [CRITERION.LOWER_CASE]: "Must contain at least 2 lowercase letters",
  [CRITERION.UPPER_CASE]: "Must contain at least 2 uppercase letters",
  [CRITERION.NUMBER]: "Must contain at least 2 digits",
  [CRITERION.SYMBOL]:
    "Must contain at least 2 of the following special characters ~!@#$%^&*()",
};
