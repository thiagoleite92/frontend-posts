import fieldValidate from './const/fieldValidate';
import messageErrors from './const/messageErrors';
import isValidEmail from './validations/email';
import isValidPassword from './validations/password';

export default function isValidFields(
  value: string,
  name: string,
  required: boolean
) {
  if (!value && required)
    return {
      error: messageErrors['emptyField'],
      isValid: fieldValidate['isNotValid'],
    };

  if ((name === 'name' || name === 'email') && value?.length < 3)
    return {
      error: messageErrors['minOneChar'],
      isValid: fieldValidate['isNotValid'],
    };

  if (name === 'email') {
    if (!isValidEmail(value)) {
      return {
        error: messageErrors['invalidEmail'],
        isValid: fieldValidate['isNotValid'],
      };
    }
  }

  if (name === 'password') {
    if (!isValidPassword(value)) {
      return {
        error: messageErrors['invalidPassword'],
        isValid: fieldValidate['isNotValid'],
      };
    }
  }

  if (name === 'text' && value?.length < 1)
    return {
      error: messageErrors['minOneChar'],
      isValid: fieldValidate['isNotValid'],
    };

  if (name === 'title' && value?.length < 1)
    return {
      error: messageErrors['minOneChar'],
      isValid: fieldValidate['isNotValid'],
    };

  return {
    error: '',
    isValid: 'ok',
  };
}
