function countValidPassports(passportsAsString) {
  let passports = passportsAsString.split('\n\n');
  return passports.filter(isValidPassport).length;
}

function isValidPassport(passport) {
  return (
    includesEyeColor(passport) &&
    includesPassportId(passport) &&
    includesExpirationYear(passport) &&
    includesHairColor(passport) &&
    includesBirthYear(passport) &&
    includesIssueYear(passport) &&
    includesHeight(passport)
  );
}

function includesEyeColor(passport) {
  return passport.includes('ecl');
}

function includesPassportId(passport) {
  return passport.includes('pid');
}

function includesExpirationYear(passport) {
  return passport.includes('eyr');
}

function includesHairColor(passport) {
  return passport.includes('hcl');
}

function includesBirthYear(passport) {
  return passport.includes('byr');
}

function includesIssueYear(passport) {
  return passport.includes('iyr');
}

function includesHeight(passport) {
  return passport.includes('hgt');
}

export { countValidPassports };
