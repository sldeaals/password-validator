import { Translations } from "../types";
import { CRITERION } from "../types";
import { MIN_LEN, CHAR_COUNT } from "../utils/constants";

export const GENERAL_TRANSLATIONS = {
  passwordValidator: {
    en: "Password Validator",
    zh: "密码验证器",
    es: "Validador de Contraseñas",
    hi: "पासवर्ड मान्यताकर्ता",
    ar: "فاحص كلمة المرور",
  },
  generatePassword: {
    en: "Generate Password",
    zh: "生成密码",
    es: "Generar Contraseña",
    hi: "पासवर्ड उत्पन्न करें",
    ar: "إنشاء كلمة مرور",
  },
  learnReact: {
    en: "Learn React",
    zh: "学习React",
    es: "Aprender React",
    hi: "रिएक्ट सीखें",
    ar: "تعلم رياكت",
  },
  passwordLabel: {
    en: "password",
    zh: "密码",
    es: "contraseña",
    hi: "पासवर्ड",
    ar: "كلمة السر",
  },
  passwordCriteria: {
    en: "Password criteria:",
    zh: "密码准则：",
    es: "Criterios de contraseña:",
    hi: "पासवर्ड मानक:",
    ar: "معايير كلمة المرور:",
  },
};

export const RULES_MESSAGES = {
  [CRITERION.MIN_LENGTH]: {
    en: `Must be a minimum of ${MIN_LEN} characters`,
    zh: `长度必须至少为 ${MIN_LEN} 个字符`,
    es: `Debe tener un mínimo de ${MIN_LEN} caracteres`,
    hi: `${MIN_LEN} अक्षरों का न्यूनतम होना चाहिए`,
    ar: `يجب أن يكون على الأقل ${MIN_LEN} حرفًا`,
  },
  [CRITERION.LOWER_CASE]: {
    en: `Must contain at least ${CHAR_COUNT} lowercase letters`,
    zh: `必须包含至少 ${CHAR_COUNT} 个小写字母`,
    es: `Debe contener al menos ${CHAR_COUNT} letras minúsculas`,
    hi: `${CHAR_COUNT} लोअरकेस अक्षर होने चाहिए`,
    ar: `يجب أن تحتوي على الأقل ${CHAR_COUNT} حرفًا صغيرًا`,
  },
  [CRITERION.UPPER_CASE]: {
    en: `Must contain at least ${CHAR_COUNT} uppercase letters`,
    zh: `必须包含至少 ${CHAR_COUNT} 个大写字母`,
    es: `Debe contener al menos ${CHAR_COUNT} letras mayúsculas`,
    hi: `${CHAR_COUNT} अपरकेस अक्षर होने चाहिए`,
    ar: `يجب أن تحتوي على الأقل ${CHAR_COUNT} حرفًا كبيرًا`,
  },
  [CRITERION.NUMBERS]: {
    en: `Must contain at least ${CHAR_COUNT} digits`,
    zh: `必须包含至少 ${CHAR_COUNT} 个数字`,
    es: `Debe contener al menos ${CHAR_COUNT} dígitos`,
    hi: `${CHAR_COUNT} अंक होने चाहिए`,
    ar: `يجب أن تحتوي على الأقل ${CHAR_COUNT} أرقام`,
  },
  [CRITERION.SYMBOLS]: {
    en: `Must contain at least ${CHAR_COUNT} of the following special characters !@#$%^&*()_`,
    zh: `必须包含至少 ${CHAR_COUNT} 个特殊字符 !@#$%^&*()_`,
    es: `Debe contener al menos ${CHAR_COUNT} de los siguientes caracteres especiales !@#$%^&*()_`,
    hi: `${CHAR_COUNT} इन विशेष वर्णों !@#$%^&*()_ में से कम से कम होने चाहिए`,
    ar: `يجب أن تحتوي على الأقل ${CHAR_COUNT} من الرموز الخاصة التالية !@#$%^&*()_`,
  },
};

export const PASSWORD_CRITERIA_TRANSLATIONS = {
  typePassword: {
    en: "Type a password",
    zh: "输入密码",
    es: "Escribe una contraseña",
    hi: "पासवर्ड टाइप करें",
    ar: "اكتب كلمة مرور",
  },
  noPassword: {
    en: "No password",
    zh: "无密码",
    es: "Sin contraseña",
    hi: "कोई पासवर्ड नहीं",
    ar: "لا توجد كلمة مرور",
  },
  includeLowerCase: {
    en: "Include lowercase letters",
    zh: "包含小写字母",
    es: "Incluir letras minúsculas",
    hi: "लोअरकेस अक्षर शामिल करें",
    ar: "تضمين حروف صغيرة",
  },
  includeUpperCase: {
    en: "Include uppercase letters",
    zh: "包含大写字母",
    es: "Incluir letras mayúsculas",
    hi: "अपरकेस अक्षर शामिल करें",
    ar: "تضمين حروف كبيرة",
  },
  includeNumbers: {
    en: "Include numbers",
    zh: "包含数字",
    es: "Incluir números",
    hi: "अंक शामिल करें",
    ar: "تضمين الأرقام",
  },
  includeSymbols: {
    en: "Include symbols",
    zh: "包含符号",
    es: "Incluir símbolos",
    hi: "चिन्ह शामिल करें",
    ar: "تضمين الرموز",
  },
};

export const translations: Translations = {
  ...GENERAL_TRANSLATIONS,
  ...RULES_MESSAGES,
  ...PASSWORD_CRITERIA_TRANSLATIONS,
};
