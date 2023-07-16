import { Profile, ValidateProfileErrors } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  if (!profile) {
    return [ValidateProfileErrors.EMPTY_PROFILE];
  }
  const {
    name, lastname, age, country
  } = profile;
  const errors: ValidateProfileErrors[] = [];

  if (!name && lastname) {
    errors.push(ValidateProfileErrors.INDALID_USER_DATA);
  }

  if (!age || age < 1) {
    errors.push(ValidateProfileErrors.INDALID_USER_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileErrors.INDALID_USER_COUNTRY);
  }

  return errors;
};
